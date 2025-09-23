"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IArticle } from "@/redux/features/articles/types";

interface ArticlesCardProps {
  article: IArticle;
}

// প্রথম image বের করার helper
const extractFirstImage = (html: string): string | null => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

// text excerpt বের করার helper
const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
};

// পড়তে সময় কত লাগবে (word count দিয়ে approx calculation)
const calculateReadTime = (html: string): number => {
  const text = stripHtml(html);
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200); // 200 words/min
};

export function ArticlesCard({ article }: ArticlesCardProps) {
  const firstImage = extractFirstImage(article.content);
  const excerpt = stripHtml(article.content).slice(0, 120) + "...";
  const readTime = calculateReadTime(article.content);

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
      <Link href={`/articles/${article._id}`}>
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            width={400}
            height={200}
            src={
              firstImage ||
              "https://via.placeholder.com/400x200.png?text=No+Image"
            }
            alt={article.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(article.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime} min read
            </div>
          </div>

          {/* Status badge */}
          <div className="mt-2">
            <Badge
              variant={article.status === "published" ? "default" : "secondary"}
            >
              {article.status}
            </Badge>
          </div>
        </div>
      </Link>
    </Card>
  );
}
