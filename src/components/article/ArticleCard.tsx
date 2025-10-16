"use client";

import type { IArticle } from "@/redux/features/articles/types";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArticlesCardProps {
  article: IArticle;
}

// Extract first image helper
const extractFirstImage = (html: string): string | null => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

// Strip HTML helper
const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
};

// Calculate read time
const calculateReadTime = (html: string): number => {
  const text = stripHtml(html);
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200); // 200 words/min
};

export function ArticlesCard({ article }: ArticlesCardProps) {
  const firstImage = extractFirstImage(article.content);
  const excerpt = stripHtml(article.content).slice(0, 150) + "...";
  const readTime = calculateReadTime(article.content);

  return (
    <Link href={`/articles/${article._id}`} className="group block">
      <div className="relative overflow-hidden bg-[#F9F6F3] rounded-lg border font-serif border-border/50 hover:bg-amber-100/30  hover:border-gray-300 transition-all duration-500 h-full flex flex-col">
        {/* Image Container with Overlay */}
        <div className="relative h-56 overflow-hidden bg-muted">
          <Image
            width={600}
            height={400}
            src={
              firstImage ||
              "https://via.placeholder.com/600x400.png?text=No+Image" ||
              "/placeholder.svg"
            }
            alt={article.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Status Badge - Positioned on Image */}

          {/* Arrow Icon - Appears on Hover */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col space-y-4">
          {/* Meta Info - Top */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl hover:text-gray-500 font-semibold line-clamp-2 text-balance group-hover:text-primary transition-colors duration-300 leading-tight">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">
            {excerpt}
          </p>

          {/* Read More Link */}
          <div className="pt-2">
            <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
              Read article
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
