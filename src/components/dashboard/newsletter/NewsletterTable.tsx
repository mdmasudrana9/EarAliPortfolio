"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteNewsletterMutation,
  useGetAllNewslettersQuery,
} from "@/redux/features/newsletter/newsletterApi";
import { INewsletter } from "@/redux/features/newsletter/types";
import { Mail, MoreHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function NewsletterTable() {
  const { data } = useGetAllNewslettersQuery("");
  const initialSubscribers: INewsletter[] = data?.data ?? [];
  const [deleteNewsletter] = useDeleteNewsletterMutation();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(initialSubscribers.length / itemsPerPage);
  const paginatedSubscribers = initialSubscribers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = async (id: string) => {
    try {
      await deleteNewsletter(id).unwrap();
      toast.success("Newsletter deleted successfully!");
    } catch (error) {
      console.error("Failed to delete newsletter:", error);
      toast.error("Failed to delete newsletter!");
    }
  };

  const handleSendEmail = (email: string) => {
    alert(`Sending email to ${email}`);
  };

  // ✅ Send email to all subscribers
  const handleSendAll = () => {
    if (initialSubscribers.length === 0) {
      toast.error("No subscribers found!");
      return;
    }

    const allEmails = initialSubscribers.map((s) => s.email);
    // এখানে API call করতে পারো -> sendNewsletterToAll(allEmails)
    console.log("Sending email to:", allEmails);

    toast.success(`Emails sent to ${allEmails.length} subscribers!`);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 flex-wrap">
          <span className="text-lg font-semibold">Newsletter Subscribers</span>
          <Badge variant="outline">{initialSubscribers.length} total</Badge>
        </CardTitle>

        {/* ✅ Send Email to All Button */}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={handleSendAll}
        >
          <Mail className="h-4 w-4" />
          Send to All
        </Button>
      </CardHeader>

      <CardContent>
        {/* Table (Desktop) */}
        <div className="hidden md:block w-full overflow-x-auto">
          <Table className="min-w-[600px] border rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">S.No</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subscription Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedSubscribers.map((subscriber, index) => (
                <TableRow key={subscriber._id}>
                  <TableCell className="font-medium">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </TableCell>
                  <TableCell className="font-mono text-sm break-all">
                    {subscriber.email}
                  </TableCell>
                  <TableCell className="text-muted-foreground whitespace-nowrap">
                    {new Date(subscriber.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendEmail(subscriber.email)}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleSendEmail(subscriber.email)}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(subscriber._id)}
                            className="text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {paginatedSubscribers.map((subscriber, index) => (
            <div
              key={subscriber._id}
              className="border rounded-lg p-4 shadow-sm bg-card"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  #{(currentPage - 1) * itemsPerPage + index + 1}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleSendEmail(subscriber.email)}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(subscriber._id)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="font-mono text-sm break-all mt-2">
                {subscriber.email}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(subscriber.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </Button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
