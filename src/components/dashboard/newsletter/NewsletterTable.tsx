"use client";

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

  const handleDelete = async (id: string) => {
    console.log("id :>> ", id);
    try {
      await deleteNewsletter(id).unwrap();
      toast.success("Newsletter deleted successfully!");
      // Optional: refetch list or update state
    } catch (error) {
      console.error("Failed to delete newsletter:", error);
      toast.error("Failed to delete newsletter!");
    }
  };

  const handleSendEmail = (email: string) => {
    // Placeholder for email functionality
    alert(`Sending email to ${email}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Newsletter Subscribers
          <Badge variant="outline" className="ml-2">
            {initialSubscribers.length} total
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className=" border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">S.No</TableHead>
                <TableHead>Email</TableHead>

                <TableHead>Subscription Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {initialSubscribers.map((subscriber, index) => (
                <TableRow key={subscriber._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="font-mono text-sm">
                    {subscriber.email}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {new Date(subscriber.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendEmail(subscriber.email)}
                        disabled={subscriber._id === "unsubscribed"}
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
                            disabled={subscriber.createdAt === "unsubscribed"}
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
      </CardContent>
    </Card>
  );
}
