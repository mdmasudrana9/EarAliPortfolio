"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useDeleteArticleMutation,
  useGetAllArticlesQuery,
  useUpdateStatusArticleMutation,
} from "@/redux/features/articles/articleApi";
import { IArticle } from "@/redux/features/articles/types";
import { ChevronLeft, ChevronRight, Edit, Trash2, Upload } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function ArticleTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const { data, isLoading } = useGetAllArticlesQuery();
  const Articles: IArticle[] = data?.data ?? [];

  const router = useRouter();

  const [UpdateStatusArticle] = useUpdateStatusArticleMutation();
  const [deleteArticle] = useDeleteArticleMutation();

  const totalPages = Math.ceil(Articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = Articles.slice(startIndex, endIndex);

  const handlePublish = async (id: string) => {
    try {
      await UpdateStatusArticle(id).unwrap();
      toast.success("Article published successfully!");
    } catch {
      toast.error("Failed to publish article!");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteArticle(id).unwrap();
      toast.success("Article Deleted successfully!");
    } catch {
      toast.error("Failed to delete article!");
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/dashboard/articles/edit/${id}`);
  };

  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  // Render pagination numbers with mobile optimization
  const renderPaginationNumbers = () => {
    const maxVisiblePages = 3; // Show fewer pages on mobile
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Smart pagination for larger page counts
      if (currentPage <= 2) {
        pages.push(1, 2, 3);
      } else if (currentPage >= totalPages - 1) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return pages.map((page) => (
      <Button
        key={page}
        variant={currentPage === page ? "default" : "outline"}
        size="sm"
        onClick={() => setCurrentPage(page)}
        className={`w-8 h-8 p-0 text-xs sm:w-10 sm:h-10 sm:text-sm ${
          currentPage === page
            ? "bg-primary text-primary-foreground"
            : "hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        {page}
      </Button>
    ));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10 text-muted-foreground">
        Loading articles...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-2 sm:p-4">
      <div className="mx-auto container">
        <Card className="shadow-lg border-0 bg-card overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-muted/30 p-3 sm:p-4 md:p-6">
            <div className="flex flex-col space-y-3 sm:space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                  Article Management
                </CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground font-serif">
                  Manage and organize your articles
                </p>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto text-sm sm:text-base"
                size="sm"
              >
                <Upload className="w-4 h-4 mr-2" />
                <Link href="/dashboard/articles" className="block w-full">
                  New Article
                </Link>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Desktop/Tablet Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full min-w-[600px] border rounded-lg">
                <thead className="bg-muted/50">
                  <tr className="border-border/50 hover:bg-transparent">
                    <th className="text-left py-4 px-3 font-semibold text-sm">
                      Title
                    </th>
                    <th className="text-left font-semibold text-sm">Status</th>
                    <th className="text-left font-semibold text-sm">Author</th>
                    <th className="text-left font-semibold text-sm">Views</th>
                    <th className="text-left font-semibold text-sm">Created</th>
                    <th className="text-right font-semibold text-sm md:pr-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentArticles.map((article) => (
                    <tr
                      key={article._id}
                      className="border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-3 px-3 max-w-xs truncate text-sm">
                        {article.title}
                      </td>
                      <td>
                        <Badge
                          variant={
                            article.status === "published"
                              ? "default"
                              : "secondary"
                          }
                          className={`text-xs ${
                            article.status === "published"
                              ? "bg-green-500/20 text-green-700"
                              : "bg-yellow-500/20 text-yellow-700"
                          }`}
                        >
                          {article.status === "published"
                            ? "Published"
                            : "Draft"}
                        </Badge>
                      </td>
                      <td className="text-muted-foreground text-sm">Yar Ali</td>
                      <td className="text-muted-foreground text-sm">0</td>
                      <td className="text-muted-foreground text-sm">
                        {formatDate(article.createdAt)}
                      </td>
                      <td className="text-right md:pr-3">
                        <div className="flex justify-end gap-1 xl:gap-2 flex-wrap">
                          {article.status === "draft" && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handlePublish(article._id)}
                              className="bg-green-100 text-green-700 hover:bg-green-600 hover:text-white text-xs px-2 py-1"
                            >
                              <Upload className="w-3 h-3 mr-1" />
                              Publish
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(article._id)}
                            className="hover:bg-primary hover:text-primary-foreground text-xs px-2 py-1"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(article._id)}
                            className="border-destructive/20 text-destructive hover:bg-destructive hover:text-white text-xs px-2 py-1"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden space-y-3 p-3 sm:p-4">
              {currentArticles.map((article) => (
                <Card key={article._id} className="shadow-sm border bg-card/50">
                  <div className="p-3 sm:p-4">
                    {/* Header with title and status */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <h4 className="font-medium text-foreground text-sm sm:text-base leading-tight pr-2">
                        {article.title}
                      </h4>
                      <Badge
                        variant={
                          article.status === "published"
                            ? "default"
                            : "secondary"
                        }
                        className={`self-start text-xs whitespace-nowrap ${
                          article.status === "published"
                            ? "bg-green-500/20 text-green-700"
                            : "bg-yellow-500/20 text-yellow-700"
                        }`}
                      >
                        {article.status === "published" ? "Published" : "Draft"}
                      </Badge>
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-1 sm:gap-2 mb-3 text-xs sm:text-sm text-muted-foreground">
                      <p>Author: Yar Ali</p>
                      <p>Views: 0</p>
                      <p className="xs:col-span-2">
                        Created: {formatDate(article.createdAt)}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col xs:flex-row gap-2">
                      {article.status === "draft" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handlePublish(article._id)}
                          className="bg-green-100 text-green-700 hover:bg-green-600 hover:text-white text-xs h-8"
                        >
                          <Upload className="w-3 h-3 mr-1.5" />
                          Publish
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(article._id)}
                        className="hover:bg-primary hover:text-primary-foreground text-xs h-8"
                      >
                        <Edit className="w-3 h-3 mr-1.5" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(article._id)}
                        className="border-destructive/20 text-destructive hover:bg-destructive hover:text-white text-xs h-8"
                      >
                        <Trash2 className="w-3 h-3 mr-1.5" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Enhanced Mobile-First Pagination */}
            {/* Enhanced Mobile-First Pagination */}
            <div className="border-t border-border/50 bg-muted/30 p-3 sm:p-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                {/* Results info */}
                <div className="text-xs sm:text-sm text-muted-foreground text-center lg:text-left">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(endIndex, Articles.length)} of {Articles.length}{" "}
                  articles
                </div>

                {/* Pagination controls */}
                <div className="flex items-center justify-center lg:justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="hover:bg-primary hover:text-primary-foreground h-8 px-2 sm:px-3 text-xs sm:text-sm"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-0 sm:mr-1" />
                    <span className="hidden xs:inline">Prev</span>
                  </Button>

                  <div className="flex items-center gap-1">
                    {renderPaginationNumbers()}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="hover:bg-primary hover:text-primary-foreground h-8 px-2 sm:px-3 text-xs sm:text-sm"
                  >
                    <span className="hidden xs:inline">Next</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0 sm:ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
