"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Mail, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample newsletter data
const initialSubscribers = [
  {
    id: 1,
    email: "john.doe@example.com",
    status: "active",
    subscribedAt: "2024-01-15",
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    status: "active",
    subscribedAt: "2024-01-20",
  },
  {
    id: 3,
    email: "mike.johnson@example.com",
    status: "pending",
    subscribedAt: "2024-02-01",
  },
  {
    id: 4,
    email: "sarah.wilson@example.com",
    status: "active",
    subscribedAt: "2024-02-10",
  },
  {
    id: 5,
    email: "david.brown@example.com",
    status: "unsubscribed",
    subscribedAt: "2024-01-05",
  },
  {
    id: 6,
    email: "sarah.wilson@example.com",
    status: "active",
    subscribedAt: "2024-02-10",
  },
  {
    id: 7,
    email: "david.brown@example.com",
    status: "unsubscribed",
    subscribedAt: "2024-01-05",
  },
  {
    id: 8,
    email: "sarah.wilson@example.com",
    status: "active",
    subscribedAt: "2024-02-10",
  },
  {
    id: 9,
    email: "david.brown@example.com",
    status: "unsubscribed",
    subscribedAt: "2024-01-05",
  },
];

export function NewsletterTable() {
  const [subscribers, setSubscribers] = useState(initialSubscribers);

  const handleDelete = (id: number) => {
    setSubscribers(subscribers.filter((sub) => sub.id !== id));
  };

  const handleSendEmail = (email: string) => {
    // Placeholder for email functionality
    alert(`Sending email to ${email}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge
            variant="default"
            className="bg-green-100 text-green-800 hover:bg-green-100"
          >
            Active
          </Badge>
        );
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "unsubscribed":
        return <Badge variant="destructive">Unsubscribed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Newsletter Subscribers
          <Badge variant="outline" className="ml-2">
            {subscribers.length} total
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
                <TableHead>Status</TableHead>
                <TableHead>Subscribed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers.map((subscriber, index) => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="font-mono text-sm">
                    {subscriber.email}
                  </TableCell>
                  <TableCell>{getStatusBadge(subscriber.status)}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(subscriber.subscribedAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendEmail(subscriber.email)}
                        disabled={subscriber.status === "unsubscribed"}
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
                            disabled={subscriber.status === "unsubscribed"}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(subscriber.id)}
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
