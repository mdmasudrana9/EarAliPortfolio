"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RefreshCw, Save, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  usePublishArticleMutation,
  useSaveDraftMutation,
  useUpdateArticleMutation,
} from "@/redux/features/articles/articleApi";
import {
  resetArticle,
  setContent as setContentAction,
  setTitle,
} from "@/redux/features/articles/articleSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

interface TiptapEditorProps {
  placeholder?: string;
  article?: {
    _id: string;
    title?: string;
    content?: string;
  };
}

export function EditTiptapEditor({
  placeholder = "Start writing your article...",
  article,
}: TiptapEditorProps) {
  // Redux hooks
  const dispatch = useDispatch<AppDispatch>();
  const { title, content } = useSelector((s: RootState) => s.article);

  // RTK Query mutations
  const [saveDraft, { isLoading: isSavingDraft }] = useSaveDraftMutation();
  const [publishArticle, { isLoading: isPublishing }] =
    usePublishArticleMutation();
  const [updateArticle, { isLoading: isUpdating }] = useUpdateArticleMutation();

  // Local UI state for status messages
  const [saveStatus, setSaveStatus] = useState<string>("");

  // 🟢 যখন article prop আসবে তখন Redux state আপডেট করো
  useEffect(() => {
    if (article) {
      dispatch(setTitle(article.title || ""));
      dispatch(setContentAction(article.content || "<p></p>"));
    }
  }, [article, dispatch]);

  // Tiptap editor initialization
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

  // Sync Redux → Editor যখন content পরিবর্তন হয়
  useEffect(() => {
    if (editor && content && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  // Save draft
  const handleSaveDraft = async () => {
    if (!title.trim() || !editor) {
      setSaveStatus("Please add a title and some content before saving.");
      return;
    }
    setSaveStatus("Saving draft...");
    try {
      const res = await saveDraft({
        title: title.trim(),
        content: editor.getHTML(),
      }).unwrap();
      setSaveStatus(res?.message || "Draft saved successfully!");
    } catch {
      setSaveStatus("Failed to save draft.");
    }
  };

  // Publish article
  const handlePublish = async () => {
    if (!title.trim() || !editor) {
      setSaveStatus("Please add a title and some content before publishing.");
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
    } catch {
      setSaveStatus("Failed to publish article.");
    }
  };

  // ✅ Update
  const { push } = useRouter();
  const handleUpdate = async () => {
    if (!title.trim() || !editor || !article?._id) {
      setSaveStatus("No article ID found for update.");
      return;
    }
    setSaveStatus("Updating article...");
    try {
      const res = await updateArticle({
        id: article._id,
        title: title.trim(),
        content: editor.getHTML(),
      }).unwrap();
      setSaveStatus(res?.message || "Article updated successfully!");
      push("/dashboard/manage-articles");
    } catch {
      setSaveStatus("Failed to update article.");
    }
  };

  if (!editor) return null;

  return (
    <div className="Container mx-auto flex gap-6">
      <div className="flex-1">
        {/* Title Input */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Article title..."
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            className="w-full text-3xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Editor */}
        <Card className="min-h-[416px] mb-4">
          <EditorContent editor={editor} />
        </Card>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center gap-3 justify-end">
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
            {isPublishing ? "Publishing..." : "Publish"}
          </Button>

          <Button
            variant="secondary"
            onClick={handleUpdate}
            disabled={isUpdating}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            {isUpdating ? "Updating..." : "Update"}
          </Button>
        </div>
      </div>
    </div>
  );
}
