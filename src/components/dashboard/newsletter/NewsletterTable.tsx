/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Mail, MoreHorizontal, Trash2, Users } from "lucide-react";
import { Fragment, useMemo, useState } from "react";
import { toast } from "sonner";

import {
  useDeleteNewsletterMutation,
  useGetAllNewslettersQuery,
} from "@/redux/features/newsletter/newsletterApi";
import { INewsletter } from "@/redux/features/newsletter/types";

import { SendNewsletterModal } from "@/components/dashboard/newsletter/SendNewsletterModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input"; // Assuming you have a reusable Input component
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function NewsletterTable() {
  const { data, isLoading, isError } = useGetAllNewslettersQuery("");
  const [deleteNewsletter, { isLoading: isDeleting }] =
    useDeleteNewsletterMutation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const subscribers: INewsletter[] = data?.data ?? [];

  // --------------------------
  // Filtered Subscribers (Search)
  // --------------------------
  const filteredSubscribers = useMemo(() => {
    if (!searchTerm) return subscribers;
    return subscribers.filter((sub) =>
      sub.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [subscribers, searchTerm]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
  const paginatedSubscribers = filteredSubscribers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --------------------------
  // Handlers
  // --------------------------
  const handleDelete = async (id: string) => {
    try {
      await deleteNewsletter(id).unwrap();
      toast.success("Subscriber removed successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete subscriber.");
    }
  };

  const handleSendEmail = (email: string) => {
    toast.message(`Sending newsletter to: ${email}`);
  };

  // --------------------------
  // Conditional Rendering
  // --------------------------
  if (isLoading)
    return (
      <Card className="p-6 text-center">
        <p className="text-sm text-muted-foreground">Loading subscribers...</p>
      </Card>
    );

  if (isError)
    return (
      <Card className="p-6 text-center">
        <p className="text-sm text-destructive">Failed to load data.</p>
      </Card>
    );

  if (subscribers.length === 0)
    return (
      <Card className="p-10 text-center">
        <Users className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
        <p className="text-sm text-muted-foreground">
          No subscribers found yet.
        </p>
      </Card>
    );

  // --------------------------
  // Main Render
  // --------------------------
  return (
    <Card className="overflow-hidden ">
      {/* Header */}
      <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between flex-wrap gap-3 border-b pb-3">
        <div className="flex flex-col  items-start  gap-3">
          <CardTitle className="flex items-center gap-2 text-3xl font-semibold">
            Newsletter Subscribers
            <Badge className="text-sm" variant="outline">
              {subscribers.length} total
            </Badge>
          </CardTitle>

          {/* Search Input + Reset */}
          <div className="flex w-full items-center gap-2">
            <Input
              placeholder="Search by email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset page when searching
              }}
              className="max-w-xs"
            />
            {searchTerm && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
              >
                Reset
              </Button>
            )}
          </div>
        </div>

        <SendNewsletterModal />
      </CardHeader>

      {/* Content */}
      <CardContent>
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg font-serif">SL</TableHead>
                <TableHead className="text-lg font-serif">Email</TableHead>
                <TableHead className="text-lg font-serif">
                  Date Subscribed
                </TableHead>
                <TableHead className="text-right text-lg font-serif">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedSubscribers.map((sub, index) => (
                <TableRow key={sub._id} className="hover:bg-muted/30">
                  <TableCell className="font-serif text-md">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </TableCell>
                  <TableCell className="font-serif text-md break-all">
                    {sub.email}
                  </TableCell>
                  <TableCell className=" text-md">
                    {new Date(sub.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center text-lg justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSendEmail(sub.email)}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleSendEmail(sub.email)}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(sub._id)}
                            className="text-destructive"
                            disabled={isDeleting}
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
          {paginatedSubscribers.map((sub, index) => (
            <Fragment key={sub._id}>
              <div className="border rounded-xl p-4 shadow-sm bg-card transition hover:shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">
                    #{(currentPage - 1) * itemsPerPage + index + 1}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleSendEmail(sub.email)}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(sub._id)}
                        className="text-destructive"
                        disabled={isDeleting}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <p className="font-mono text-sm break-all">{sub.email}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(sub.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </Fragment>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </Button>

            <span className="text-sm text-muted-foreground">
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
