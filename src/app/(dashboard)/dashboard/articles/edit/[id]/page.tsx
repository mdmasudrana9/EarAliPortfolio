"use client";

import { EditTiptapEditor } from "@/components/article/edit-article/EditTiptapEditor";
import { useGetArticleByIdQuery } from "@/redux/features/articles/articleApi";

const EditArticlePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data, isLoading } = useGetArticleByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;

  const article = data?.data;

  return (
    <main className="min-h-screen bg-background px-4">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
            Edit Article
          </h1>
          <p className="font-serif text-muted-foreground">
            Write and format your articles with ease
          </p>
        </div>

        {/* Pass article to editor */}
        <EditTiptapEditor
          placeholder="Start writing your article..."
          article={article}
        />
      </div>
    </main>
  );
};

export default EditArticlePage;
