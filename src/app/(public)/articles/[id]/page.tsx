"use client";

import ArticleDetailsPage from "@/components/article/ArticleDetailsPage";
import { useGetArticleByIdQuery } from "@/redux/features/articles/articleApi";
import { Article } from "@/redux/features/articles/types";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const id = params?.id as string; // dynamic route থেকে id

  // API hook call
  const { data, error, isLoading } = useGetArticleByIdQuery(id);

  if (isLoading) {
    return <p className="text-center text-muted-foreground">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load article.</p>;
  }

  const article: Article | undefined = data?.data;

  if (!article) {
    return (
      <p className="text-center text-muted-foreground">No article found.</p>
    );
  }

  return (
    <>
      {/* <Hero /> */}
      <ArticleDetailsPage article={article} />
    </>
  );
};

export default Page;
