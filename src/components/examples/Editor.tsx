"use client";

import { FC } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const ArticleEditor: FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something...",
      }),
    ],
    content: `
      <h2>📝 Introduction</h2>
      <p>Write your introduction here...</p>
      
      <h2>💬 Quotes</h2>
      <blockquote>Quote 1...</blockquote>
      <blockquote>Quote 2...</blockquote>
      <blockquote>Quote 3...</blockquote>
      
      <h2>🔢 Numbered List</h2>
      <ol>
        <li>Point 1</li>
        <li>Point 2</li>
      </ol>
      
      <h2>• Bullet Points</h2>
      <ul>
        <li>Bullet 1</li>
        <li>Bullet 2</li>
      </ul>
      
      <h2>📑 Subheadings</h2>
      <p>Write sub-sections here...</p>
      
      <h2>📌 Conclusion</h2>
      <p>Write your conclusion here...</p>
      
      <h2>🚀 Call to Action</h2>
      <p>Write your call to action here...</p>
    `,
    editorProps: {
      attributes: {
        class:
          "prose prose-lg p-4 border rounded-md min-h-[500px] focus:outline-none",
      },
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📰 Article Editor</h1>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="px-2 py-1 border rounded"
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="px-2 py-1 border rounded"
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className="px-2 py-1 border rounded"
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className="px-2 py-1 border rounded"
        >
          Quote
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="px-2 py-1 border rounded"
        >
          Bullet List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="px-2 py-1 border rounded"
        >
          Numbered List
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default ArticleEditor;
