"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SendNewsletterForm } from "@/components/dashboard/newsletter/SendNewsletterForm";

export function SendNewsletterModal() {
  return (
    <Dialog>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border border-primary/40 hover:bg-primary/10 transition"
        >
          <Mail className="h-4 w-4" />
          Send to All
        </Button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="max-w-2xl w-[95%] sm:w-full rounded-xl p-6 sm:p-8 bg-background shadow-xl">
        <DialogHeader className="space-y-2 border-b pb-4">
          <DialogTitle className="text-2xl font-semibold flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Send Newsletter to All Subscribers
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Fill in the newsletter details below and send it to all subscribers
            at once.
          </DialogDescription>
        </DialogHeader>

        {/* Newsletter Form */}
        <div className="mt-6">
          <SendNewsletterForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
