"use client";

import type React from "react";
import { useState } from "react";

import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

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
  ImageIcon,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  Quote,
  Redo,
  Save,
  Send,
  Undo,
  Upload,
} from "lucide-react";

import { ImageControlsDialog } from "@/components/article/editor/ImageControlsDialog";
import {
  usePublishArticleMutation,
  useSaveDraftMutation,
} from "@/redux/features/articles/articleApi";

interface TiptapEditorProps {
  placeholder?: string;
}

function TiptapEditor({
  placeholder = "Start writing your article...",
}: TiptapEditorProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [selectedImageNode, setSelectedImageNode] = useState<{
    src: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
  } | null>(null);

  // ✅ RTK Query hooks
  const [saveDraft, { isLoading: isSavingDraft }] = useSaveDraftMutation();
  const [publishArticle, { isLoading: isPublishing }] =
    usePublishArticleMutation();

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
        allowBase64: true,
        HTMLAttributes: {
          class: "rounded-md max-w-full h-auto mx-auto cursor-pointer",
        },
      }),
      Highlight.configure({ multicolor: true }),
    ],
    content: "<p></p>",
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none focus:outline-none min-h-[200px] p-6 tiptap-editor",
      },
      handleClickOn: (view, pos, node) => {
        if (node.type.name === "image") {
          const attrs = node.attrs;
          setSelectedImageNode({
            src: attrs.src,
            alt: attrs.alt,
            title: attrs.title,
            width: attrs.width,
            height: attrs.height,
          });
          setShowImageDialog(true);
        }
      },
    },
    immediatelyRender: false,
  });

  // 🔗 Add hyperlink
  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url && editor) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  // 🖼️ Add image via URL or upload
  const addImageFromUrl = () => {
    const url = window.prompt("Enter image URL");
    if (url && editor) editor.chain().focus().setImage({ src: url }).run();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      editor.chain().focus().setImage({ src: base64 }).run();
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleImageUpdate = (imageData: {
    src: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
  }) => {
    if (!editor) return;

    const { state } = editor;
    const { doc } = state;
    let imagePos: number | null = null;

    doc.descendants((node, pos) => {
      if (
        node.type.name === "image" &&
        node.attrs.src === selectedImageNode?.src
      ) {
        imagePos = pos;
        return false;
      }
    });

    if (imagePos !== null) {
      editor
        .chain()
        .focus()
        .setNodeSelection(imagePos)
        .updateAttributes("image", {
          src: imageData.src,
          alt: imageData.alt || "",
          title: imageData.title || "",
          width: imageData.width,
          height: imageData.height,
        })
        .run();
    }

    setShowImageDialog(false);
    setSelectedImageNode(null);
  };

  // ✏️ Template helpers
  const insertIntroduction = () =>
    editor
      ?.chain()
      .focus()
      .insertContent(
        "<h2>Introduction</h2><p>Start your introduction here...</p>"
      )
      .run();

  const insertConclusion = () =>
    editor
      ?.chain()
      .focus()
      .insertContent("<h2>Conclusion</h2><p>Summarize your key points...</p>")
      .run();

  const insertCallToAction = () =>
    editor
      ?.chain()
      .focus()
      .insertContent(
        "<h2>Call to Action</h2><p>What do you want readers to do next?</p>"
      )
      .run();

  // ✅ SAVE DRAFT (with RTK Query)
  const handleSaveDraft = async () => {
    if (!title.trim() || !editor) {
      setSaveStatus("⚠️ Please add a title and content before saving.");
      setTimeout(() => setSaveStatus(""), 3000);
      return;
    }
    try {
      setSaveStatus("💾 Saving draft...");
      await saveDraft({
        title,
        content: editor.getHTML(),
      }).unwrap();

      setSaveStatus("✅ Draft saved successfully!");
    } catch (err) {
      console.error("❌ Error saving draft:", err);
      setSaveStatus("❌ Failed to save draft. Please try again.");
    } finally {
      setTimeout(() => setSaveStatus(""), 3000);
    }
  };

  // ✅ PUBLISH ARTICLE (with RTK Query)
  const handlePublish = async () => {
    if (!title.trim() || !editor) {
      setSaveStatus("⚠️ Please add a title and content before publishing.");
      setTimeout(() => setSaveStatus(""), 3000);
      return;
    }
    try {
      setSaveStatus("🚀 Publishing article...");
      await publishArticle({
        title,
        content: editor.getHTML(),
      }).unwrap();

      setSaveStatus("🎉 Article published successfully!");
      setTitle("");
      editor.commands.setContent("<p></p>");
    } catch (err) {
      console.error("❌ Error publishing:", err);
      setSaveStatus("❌ Failed to publish. Please try again.");
    } finally {
      setTimeout(() => setSaveStatus(""), 3000);
    }
  };

  if (!editor) return null;

  const highlightColors = [
    { name: "Yellow", color: "oklch(90.1% 0.076 70.697)" },
    { name: "Green", color: "oklch(88.5% 0.062 140.334)" },
    { name: "Pink", color: "oklch(80.5% 0.1 350.334)" },
    { name: "Blue", color: "oklch(85% 0.12 250)" },
    { name: "Orange", color: "oklch(90% 0.1 50)" },
    { name: "Purple", color: "oklch(82% 0.1 300)" },
    { name: "Gray", color: "oklch(85% 0.02 250)" },
    { name: "Red", color: "oklch(75% 0.15 30)" },
  ];

  return (
    <div className="container mx-auto flex gap-6 py-8">
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
            onChange={(e) => setTitle(e.target.value)}
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

            {highlightColors.map((color) => (
              <Button
                key={color.name}
                variant="ghost"
                size="sm"
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .toggleHighlight({ color: color.color })
                    .run()
                }
                className="w-8 h-8 p-0"
                title={color.name}
                style={{
                  backgroundColor: editor.isActive("highlight", {
                    color: color.color,
                  })
                    ? color.color
                    : "transparent",
                }}
              >
                <div
                  className="w-4 h-4 rounded border border-border"
                  style={{ backgroundColor: color.color }}
                />
              </Button>
            ))}

            <Separator orientation="vertical" className="h-6 mx-1" />

            <Button
              variant="ghost"
              size="sm"
              onClick={addImageFromUrl}
              title="Add image from URL"
            >
              <ImageIcon className="h-4 w-4" />
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

            <Button variant="outline" onClick={handleSaveDraft}>
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>

            <Button onClick={handlePublish}>
              <Send className="h-4 w-4 mr-2" />
              Publish Article
            </Button>
          </div>
        </div>
      </div>

      {showImageDialog && selectedImageNode && (
        <ImageControlsDialog
          imageData={selectedImageNode}
          onSave={handleImageUpdate}
          onClose={() => {
            setShowImageDialog(false);
            setSelectedImageNode(null);
          }}
        />
      )}
    </div>
  );
}

export default TiptapEditor;
