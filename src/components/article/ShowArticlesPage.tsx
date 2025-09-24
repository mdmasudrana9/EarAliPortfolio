"use client";

import { ArticlesCard } from "@/components/article/ArticleCard";
import { useGetAllPublishedArticlesQuery } from "@/redux/features/articles/articleApi";
import { IArticle } from "@/redux/features/articles/types";

const ShowArticlesPage = () => {
  const { data, isLoading } = useGetAllPublishedArticlesQuery();
  const Articles: IArticle[] = data?.data ?? [];

  if (isLoading) {
    return <p className="text-center text-muted-foreground">Loading...</p>;
  }

  if (Articles.length === 0) {
    return (
      <p className="text-center text-muted-foreground">No articles found.</p>
    );
  }

  return (
    <div
      className="
        p-4 max-w-7xl mx-auto 
        grid gap-6
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      "
    >
      {Articles.map((article) => (
        <ArticlesCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default ShowArticlesPage;
