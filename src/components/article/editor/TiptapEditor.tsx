"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";
import Heading from "@tiptap/extension-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Code,
  LinkIcon,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  Save,
  Send,
  CheckCircle,
  Circle,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";

interface TiptapEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
}

const articleStructure = [
  {
    id: "introduction",
    label: "Introduction",
    keywords: ["introduction", "intro", "welcome", "overview"],
  },
  { id: "quotes", label: "Quotes", keywords: ["quote", "blockquote"] },
  {
    id: "numbered-list",
    label: "Numbered list",
    keywords: ["orderedList", "ol"],
  },
  {
    id: "bullet-points",
    label: "Bullet points",
    keywords: ["bulletList", "ul"],
  },
  { id: "subheadings", label: "Subheadings", keywords: ["heading"] },
  {
    id: "conclusion",
    label: "Conclusion",
    keywords: ["conclusion", "summary", "final"],
  },
  {
    id: "call-to-action",
    label: "Call to Action",
    keywords: ["call to action", "cta", "action", "subscribe", "contact"],
  },
];

export function TiptapEditor({
  content = "",
  onChange,
  placeholder = "Start writing your article...",
}: TiptapEditorProps) {
  const [title, setTitle] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [completedElements, setCompletedElements] = useState<Set<string>>(
    new Set()
  );

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
        blockquote: false,
        heading: false,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "tiptap-bullet-list",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "tiptap-ordered-list",
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: "tiptap-list-item",
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "tiptap-blockquote",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline hover:text-accent",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
      checkCompletedElements(html);
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none focus:outline-none min-h-[200px] p-6 tiptap-editor",
      },
    },
    immediatelyRender: false,
  });

  const checkCompletedElements = (html: string) => {
    const completed = new Set<string>();
    const lowercaseContent = html.toLowerCase();

    articleStructure.forEach((element) => {
      const hasElement = element.keywords.some((keyword) => {
        if (keyword === "blockquote") {
          return html.includes("<blockquote>");
        }
        if (keyword === "orderedList" || keyword === "ol") {
          return html.includes("<ol>");
        }
        if (keyword === "bulletList" || keyword === "ul") {
          return html.includes("<ul>");
        }
        if (keyword === "heading") {
          return html.includes("<h2>") || html.includes("<h3>");
        }
        return lowercaseContent.includes(keyword);
      });

      if (hasElement) {
        completed.add(element.id);
      }
    });

    setCompletedElements(completed);
  };

  useEffect(() => {
    if (editor && content) {
      checkCompletedElements(content);
    }
  }, [editor, content]);

  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const insertIntroduction = () => {
    editor
      .chain()
      .focus()
      .insertContent(
        "<h2>Introduction</h2><p>Start your introduction here...</p>"
      )
      .run();
  };

  const insertConclusion = () => {
    editor
      .chain()
      .focus()
      .insertContent("<h2>Conclusion</h2><p>Summarize your key points...</p>")
      .run();
  };

  const insertCallToAction = () => {
    editor
      .chain()
      .focus()
      .insertContent(
        "<h2>Call to Action</h2><p>What do you want readers to do next? Subscribe, contact, or learn more...</p>"
      )
      .run();
  };

  const saveDraft = async () => {
    if (!title.trim() || !editor?.getHTML()) {
      setSaveStatus("Please add a title and content");
      return;
    }

    setIsSaving(true);
    setSaveStatus("Saving draft...");

    try {
      const response = await fetch("/api/articles/draft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          content: editor.getHTML(),
        }),
      });

      if (response.ok) {
        setSaveStatus("Draft saved successfully!");
      } else {
        setSaveStatus("Failed to save draft");
      }
    } catch (error) {
      setSaveStatus("Failed to save draft");
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveStatus(""), 3000);
    }
  };

  const submitArticle = async () => {
    if (!title.trim() || !editor?.getHTML()) {
      setSaveStatus("Please add a title and content");
      return;
    }

    setIsSubmitting(true);
    setSaveStatus("Publishing article...");

    try {
      const response = await fetch("/api/articles/publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          content: editor.getHTML(),
        }),
      });

      if (response.ok) {
        setSaveStatus("Article published successfully!");
      } else {
        setSaveStatus("Failed to publish article");
      }
    } catch (error) {
      setSaveStatus("Failed to publish article");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSaveStatus(""), 3000);
    }
  };

  return (
    <div className="Container mx-auto flex gap-6">
      <div className="w-64 flex-shrink-0">
        <Card className="p-4 sticky top-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Article Structure</h3>
          </div>

          <div className="space-y-3">
            {articleStructure.map((element) => (
              <div key={element.id} className="flex items-center gap-2">
                {completedElements.has(element.id) ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground" />
                )}
                <span
                  className={`text-sm ${
                    completedElements.has(element.id)
                      ? "text-green-600 font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {element.label}
                </span>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Quick Insert</h4>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start bg-transparent"
              onClick={insertIntroduction}
            >
              Add Introduction
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start bg-transparent"
              onClick={insertConclusion}
            >
              Add Conclusion
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start bg-transparent"
              onClick={insertCallToAction}
            >
              Add Call to Action
            </Button>
          </div>
        </Card>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1">
        {/* Title Input */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Article title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-3xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Toolbar */}
        <Card className="mb-4 p-2">
          <div className="flex flex-wrap items-center gap-1">
            {/* Text Formatting */}
            <Button
              variant={editor.isActive("bold") ? "default" : "ghost"}
              size="sm"
              onClick={() => editor.chain().focus().toggleBold().run()}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant={editor.isActive("italic") ? "default" : "ghost"}
              size="sm"
              onClick={() => editor.chain().focus().toggleItalic().run()}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant={editor.isActive("code") ? "default" : "ghost"}
              size="sm"
              onClick={() => editor.chain().focus().toggleCode().run()}
            >
              <Code className="h-4 w-4" />
            </Button>

            <Separator orientation="vertical" className="h-6 mx-1" />

            {/* Headings */}
            <Button
              variant={
                editor.isActive("heading", { level: 1 }) ? "default" : "ghost"
              }
              size="sm"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              variant={
                editor.isActive("heading", { level: 2 }) ? "default" : "ghost"
              }
              size="sm"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              variant={
                editor.isActive("heading", { level: 3 }) ? "default" : "ghost"
              }
              size="sm"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <Heading3 className="h-4 w-4" />
            </Button>

            <Separator orientation="vertical" className="h-6 mx-1" />

            {/* Lists */}
            <Button
              variant={editor.isActive("bulletList") ? "default" : "ghost"}
              size="sm"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={editor.isActive("orderedList") ? "default" : "ghost"}
              size="sm"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
              <ListOrdered className="h-4 w-4" />
            </Button>

            <Separator orientation="vertical" className="h-6 mx-1" />

            {/* Quote and Link */}
            <Button
              variant={editor.isActive("blockquote") ? "default" : "ghost"}
              size="sm"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
            >
              <Quote className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={addLink}>
              <LinkIcon className="h-4 w-4" />
            </Button>

            <Separator orientation="vertical" className="h-6 mx-1" />

            {/* Undo/Redo */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        {/* Editor */}
        <Card className="min-h-[416px]">
          <EditorContent editor={editor} />
        </Card>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {editor.storage.characterCount?.words() || 0} words
          </div>

          <div className="flex items-center gap-3">
            {saveStatus && (
              <span
                className={`text-sm ${
                  saveStatus.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {saveStatus}
              </span>
            )}

            <Button
              variant="outline"
              onClick={saveDraft}
              disabled={isSaving || !title.trim()}
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Saving..." : "Save Draft"}
            </Button>

            <Button
              onClick={submitArticle}
              disabled={isSubmitting || !title.trim()}
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Publishing..." : "Publish Article"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
