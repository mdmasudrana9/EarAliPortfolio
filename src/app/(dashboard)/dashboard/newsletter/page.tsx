"use client";

import { NewsletterStats } from "@/components/dashboard/newsletter/NewsletterStats";
import { NewsletterTable } from "@/components/dashboard/newsletter/NewsletterTable";
import { useGetAllNewslettersQuery } from "@/redux/features/newsletter/newsletterApi";

const Page = () => {
  const { data } = useGetAllNewslettersQuery("");
  const subscribers = data?.data ?? [];
  interface Subscriber {
    subscribedAt: string;
  }

  const recentSubscribers = subscribers.filter(
    (s: Subscriber) =>
      new Date(s.subscribedAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length;
  return (
    <main className="py-4 px-2 sm:px-4 lg:px-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-600/60 bg-clip-text text-transparent">
            Newsletter Dashboard
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Manage your subscribers and send beautiful newsletters
          </p>
        </div>

        {/* Stats */}
        <NewsletterStats
          totalSubscribers={subscribers.length}
          recentSubscribers={recentSubscribers}
          emailsSent={247}
          openRate={68.4}
        />

        {/* Table Section */}
        <div className="overflow-x-auto my-10">
          <NewsletterTable />
        </div>
      </div>
    </main>
  );
};

export default Page;
