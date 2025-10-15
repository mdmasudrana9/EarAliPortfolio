// components/article/editor/TiptapEditor.tsx
"use client";

import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight"; // ✅ highlight extension added
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Bold,
  CheckCircle,
  Circle,
  Code,
  FileText,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Redo,
  Save,
  Send,
  Undo,
} from "lucide-react";

import {
  usePublishArticleMutation,
  useSaveDraftMutation,
} from "@/redux/features/articles/articleApi";
import {
  resetArticle,
  setContent as setContentAction,
  setTitle,
} from "@/redux/features/articles/articleSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

// 🟡 highlight UI imports
import { ButtonGroup } from "@/components/tiptap-ui-primitive/button";
import { ColorHighlightButton } from "@/components/tiptap-ui/color-highlight-button";

interface TiptapEditorProps {
  placeholder?: string;
}

export function TiptapEditor({
  placeholder = "Start writing your article...",
}: TiptapEditorProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { title, content } = useSelector((s: RootState) => s.article);

  const [saveDraft, { isLoading: isSavingDraft }] = useSaveDraftMutation();
  const [publishArticle, { isLoading: isPublishing }] =
    usePublishArticleMutation();

  const [saveStatus, setSaveStatus] = useState<string>("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
        blockquote: false,
        heading: false,
      }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      BulletList.configure({ HTMLAttributes: { class: "tiptap-bullet-list" } }),
      OrderedList.configure({
        HTMLAttributes: { class: "tiptap-ordered-list" },
      }),
      ListItem.configure({ HTMLAttributes: { class: "tiptap-list-item" } }),
      Blockquote.configure({ HTMLAttributes: { class: "tiptap-blockquote" } }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-primary underline" },
      }),
      Placeholder.configure({ placeholder }),
      Image.configure({
        inline: false,
        HTMLAttributes: {
          class: "rounded-md max-w-full h-auto mx-auto",
        },
      }),
      Highlight.configure({ multicolor: true }), // ✅ highlight extension configured
    ],
    content: content || "<p></p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      dispatch(setContentAction(html));
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none focus:outline-none min-h-[200px] p-6 tiptap-editor",
      },
    },
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) return;
    if (content && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url && editor) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const insertIntroduction = () => {
    editor
      ?.chain()
      .focus()
      .insertContent(
        "<h2>Introduction</h2><p>Start your introduction here...</p>"
      )
      .run();
  };
  const insertConclusion = () => {
    editor
      ?.chain()
      .focus()
      .insertContent("<h2>Conclusion</h2><p>Summarize your key points...</p>")
      .run();
  };
  const insertCallToAction = () => {
    editor
      ?.chain()
      .focus()
      .insertContent(
        "<h2>Call to Action</h2><p>What do you want readers to do next?</p>"
      )
      .run();
  };

  const handleSaveDraft = async () => {
    if (!title.trim() || !editor) {
      setSaveStatus("Please add a title and some content before saving.");
      setTimeout(() => setSaveStatus(""), 3000);
      return;
    }
    setSaveStatus("Saving draft...");
    try {
      const res = await saveDraft({
        title: title.trim(),
        content: editor.getHTML(),
      }).unwrap();
      setSaveStatus(res?.message || "Draft saved successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setSaveStatus("Failed to save draft.");
    } finally {
      setTimeout(() => setSaveStatus(""), 3000);
    }
  };

  const handlePublish = async () => {
    if (!title.trim() || !editor) {
      setSaveStatus("Please add a title and some content before publishing.");
      setTimeout(() => setSaveStatus(""), 3000);
      return;
    }
    setSaveStatus("Publishing article...");
    try {
      const res = await publishArticle({
        title: title.trim(),
        content: editor.getHTML(),
      }).unwrap();
      setSaveStatus(res?.message || "Article published successfully!");
      dispatch(resetArticle());
      editor.commands.setContent("<p></p>");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setSaveStatus("Failed to publish article.");
    } finally {
      setTimeout(() => setSaveStatus(""), 3000);
    }
  };

  if (!editor) return null;

  return (
    <div className="Container mx-auto flex gap-6">
      {/* Sidebar */}
      <div className="w-64 hidden lg:block flex-shrink-0">
        <Card className="p-4 sticky top-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Article Structure</h3>
          </div>

          <div className="space-y-3">
            {[
              {
                id: "introduction",
                label: "Introduction",
                check: content.includes("<h2>Introduction"),
              },
              {
                id: "quotes",
                label: "Quotes",
                check: content.includes("<blockquote"),
              },
              {
                id: "numbered-list",
                label: "Numbered list",
                check: content.includes("<ol>"),
              },
              {
                id: "bullet-points",
                label: "Bullet points",
                check: content.includes("<ul>"),
              },
              {
                id: "subheadings",
                label: "Subheadings",
                check: content.includes("<h2>") || content.includes("<h3>"),
              },
              {
                id: "conclusion",
                label: "Conclusion",
                check: content.includes("<h2>Conclusion"),
              },
              {
                id: "call-to-action",
                label: "Call to Action",
                check: content.includes("Call to Action"),
              },
            ].map((el) => (
              <div key={el.id} className="flex items-center gap-2">
                {el.check ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground" />
                )}
                <span
                  className={`text-sm ${
                    el.check
                      ? "text-green-600 font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {el.label}
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
              onClick={insertIntroduction}
              className="w-full justify-start bg-transparent"
            >
              Add Introduction
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={insertConclusion}
              className="w-full justify-start bg-transparent"
            >
              Add Conclusion
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={insertCallToAction}
              className="w-full justify-start bg-transparent"
            >
              Add Call to Action
            </Button>
          </div>
        </Card>
      </div>

      {/* Main Editor */}
      <div className="flex-1">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Article title..."
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            className="w-full text-3xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Toolbar */}
        <Card className="mb-4 p-2">
          <div className="flex flex-wrap items-center gap-1">
            {/* Bold / Italic */}
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

            {/* Highlight Buttons Group 🟨 */}
            <ButtonGroup orientation="horizontal">
              <ColorHighlightButton
                editor={editor}
                tooltip="Yellow"
                highlightColor="oklch(90.1% 0.076 70.697)"
              />
              <ColorHighlightButton
                editor={editor}
                tooltip="Green"
                highlightColor="oklch(88.5% 0.062 140.334)"
              />
              <ColorHighlightButton
                editor={editor}
                tooltip="Pink"
                highlightColor="oklch(80.5% 0.1 350.334)"
              />
              <ColorHighlightButton
                editor={editor}
                tooltip="Blue"
                highlightColor="oklch(85% 0.12 250)"
              />
              <ColorHighlightButton
                editor={editor}
                tooltip="Orange"
                highlightColor="oklch(90% 0.1 50)"
              />
              <ColorHighlightButton
                editor={editor}
                tooltip="Purple"
                highlightColor="oklch(82% 0.1 300)"
              />
              <ColorHighlightButton
                editor={editor}
                tooltip="Gray"
                highlightColor="oklch(85% 0.02 250)"
              />
              <ColorHighlightButton
                editor={editor}
                tooltip="Red"
                highlightColor="oklch(75% 0.15 30)"
              />
            </ButtonGroup>

            <Separator orientation="vertical" className="h-6 mx-1" />

            {/* Image / Code */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const url = window.prompt("Enter image URL");
                if (url) editor.chain().focus().setImage({ src: url }).run();
              }}
            >
              🖼️
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

            {/* Quote, Link */}
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

            {/* Undo / Redo */}
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
          <div className="text-sm text-muted-foreground"></div>

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
              onClick={handleSaveDraft}
              disabled={isSavingDraft}
            >
              <Save className="h-4 w-4 mr-2" />
              {isSavingDraft ? "Saving..." : "Save Draft"}
            </Button>

            <Button onClick={handlePublish} disabled={isPublishing}>
              <Send className="h-4 w-4 mr-2" />
              {isPublishing ? "Publishing..." : "Publish Article"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
