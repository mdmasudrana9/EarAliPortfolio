"use client";

import { useState } from "react";
import { ArticlesCard } from "@/components/article/ArticleCard";
import { useGetAllPublishedArticlesQuery } from "@/redux/features/articles/articleApi";
import type { IArticle } from "@/redux/features/articles/types";
import { BookOpen, Sparkles } from "lucide-react";

const ShowArticlesPage = () => {
  const { data, isLoading } = useGetAllPublishedArticlesQuery();
  const Articles: IArticle[] = data?.data ?? [];

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Calculate pagination indexes
  const totalPages = Math.ceil(Articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = Articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top when page changes
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative container mx-auto rounded-b-2xl overflow-hidden bg-[#F9F6F3] py-24 px-4 sm:py-32">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5 mix-blend-overlay" />

        <div className="relative container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 backdrop-blur-sm border border-gray-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-black font-serif">
              Discover Stories
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black font-serif mb-6">
            Explore Our Latest Articles
          </h1>

          <p className="text-lg sm:text-xl text-black font-serif max-w-2xl mx-auto mb-8 leading-relaxed">
            Dive into a curated collection of insights, stories, and ideas
            crafted to inspire and inform.
          </p>

          <div className="flex items-center justify-center gap-2 text-black font-serif">
            <BookOpen className="w-5 h-5" />
            <span className="text-lg font-medium">
              {Articles.length} {Articles.length === 1 ? "Article" : "Articles"}{" "}
              Available
            </span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {Articles.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <BookOpen className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No articles yet
              </h3>
              <p className="text-muted-foreground">
                Check back soon for new content.
              </p>
            </div>
          ) : (
            <>
              {/* Articles */}
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {currentArticles.map((article) => (
                  <ArticlesCard key={article._id} article={article} />
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="mt-12 flex items-center justify-center gap-2">
                {/* Prev Button */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-md border text-sm font-medium transition ${
                    currentPage === 1
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  Prev
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-3 py-2 rounded-md border text-sm font-medium transition ${
                        page === currentPage
                          ? "bg-black text-white border-black"
                          : "text-gray-700 border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                {/* Next Button */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-md border text-sm font-medium transition ${
                    currentPage === totalPages
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShowArticlesPage;
