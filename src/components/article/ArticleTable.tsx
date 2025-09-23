"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteArticleMutation,
  useGetAllArticlesQuery,
  useUpdateStatusArticleMutation,
} from "@/redux/features/articles/articleApi";
import { IArticle } from "@/redux/features/articles/types";
import { ChevronLeft, ChevronRight, Edit, Trash2, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function ArticleTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  // ✅ RTK Query hook
  const { data, isLoading } = useGetAllArticlesQuery();
  const Articles: IArticle[] = data?.data ?? [];

  // ✅ Mutations
  const [UpdateStatusArticle] = useUpdateStatusArticleMutation();
  const [deleteArticle] = useDeleteArticleMutation();

  // Pagination
  const totalPages = Math.ceil(Articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = Articles.slice(startIndex, endIndex);

  // Actions

  const handlePublish = async (id: string) => {
    try {
      const res = await UpdateStatusArticle(id).unwrap();
      console.log("Published article:", res);

      toast.success("Article published successfully!");
    } catch (err) {
      console.error("Publish failed:", err);
      toast.error("Failed to publish article!");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteArticle(id).unwrap();
      toast.success("Article Deleted successfully!");
    } catch (err) {
      toast.error("Failed to publish article!");
    }
  };

  const handleEdit = (id: string) => {
    console.log("Editing article:", id);
    // এখানে আপনি navigate করতে পারেন যেমন: router.push(`/articles/edit/${id}`)
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10 text-muted-foreground">
        Loading articles...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto container">
        <Card className="shadow-lg border-0 bg-card p-4">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-serif font-bold text-foreground">
                  Article Management
                </CardTitle>
                <p className="text-muted-foreground font-serif mt-1">
                  Manage and organize your articles
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Upload className="w-4 h-4 mr-2" />
                <Link href="/dashboard/articles">New Article</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow className="border-border/50 hover:bg-transparent">
                    <TableHead className="font-semibold text-foreground py-4">
                      Title
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Status
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Author
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Views
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Created
                    </TableHead>
                    <TableHead className="text-right font-semibold text-foreground">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentArticles.map((article) => (
                    <TableRow
                      key={article._id}
                      className="border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="py-4">
                        <div className="font-medium text-foreground max-w-xs truncate">
                          {article.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            article.status === "published"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            article.status === "published"
                              ? "bg-green-500/20 text-green-700"
                              : "bg-yellow-500/20 text-yellow-700"
                          }
                        >
                          {article.status === "published"
                            ? "Published"
                            : "Draft"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <p>Yar Ali</p>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {"0"}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(article.createdAt)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {article.status === "draft" && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handlePublish(article._id)}
                              className="bg-green-100 text-green-700 hover:bg-green-600 hover:text-white"
                            >
                              <Upload className="w-3 h-3 mr-1" />
                              Publish
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(article._id)}
                            className="hover:bg-primary hover:text-primary-foreground"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(article._id)}
                            className="border-destructive/20 text-destructive hover:bg-destructive hover:text-white"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="border-t border-border/50 bg-muted/30 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(endIndex, Articles.length)} of {Articles.length}{" "}
                  articles
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className={
                            currentPage === page
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-primary hover:text-primary-foreground"
                          }
                        >
                          {page}
                        </Button>
                      )
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
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
