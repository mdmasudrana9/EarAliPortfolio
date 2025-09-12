"use client";

import { ArticlesCard } from "@/components/article/ArticleCard";
import { useGetAllArticlesQuery } from "@/redux/features/articles/articleApi";
import { IArticle } from "@/redux/features/articles/types";

const ShowArticlesPage = () => {
  const { data } = useGetAllArticlesQuery();
  const Articles: IArticle[] = data?.data ?? [];

  if (!Articles) {
    return <p className="text-center text-muted-foreground">Loading...</p>;
  }

  if (Articles.length === 0) {
    return (
      <p className="text-center text-muted-foreground">No articles found.</p>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto grid grid-cols-3 gap-6">
      {Articles.map((article) => (
        <ArticlesCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default ShowArticlesPage;
