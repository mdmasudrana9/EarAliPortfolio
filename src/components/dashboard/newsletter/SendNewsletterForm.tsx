"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useSendNewsletterToAllMutation } from "@/redux/features/newsletter/newsletterApi";

export function SendNewsletterForm() {
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [sendNewsletterToAll, { isLoading }] = useSendNewsletterToAllMutation();

  const handleSend = async () => {
    if (!subject || !html) {
      toast.error("Please fill out both subject and message!");
      return;
    }

    try {
      await sendNewsletterToAll({ subject, html }).unwrap();
      toast.success("Newsletter sent successfully!");
      setSubject("");
      setHtml("");
    } catch (error) {
      toast.error("Failed to send newsletter!");
      console.error(error);
    }
  };

  return (
    <div className="border p-4 rounded-lg mb-6 bg-card shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Send Custom Newsletter ✉️</h2>

      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Enter subject..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Textarea
          placeholder="Write your message here (supports HTML)"
          rows={6}
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />
      </div>

      <Button className="mt-4" disabled={isLoading} onClick={handleSend}>
        {isLoading ? "Sending..." : "Send to All"}
      </Button>
    </div>
  );
}
