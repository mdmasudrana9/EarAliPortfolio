"use client";

import TiptapEditor from "@/components/article/editor/TiptapEditor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background  px-4">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
            Article Editor
          </h1>
          <p className=" font-serif text-muted-foreground">
            Write and format your articles with ease
          </p>
        </div>

        <TiptapEditor placeholder="Start writing your article..." />
      </div>
    </main>
  );
}
