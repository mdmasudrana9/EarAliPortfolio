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

export function ArticlesCard({ article }: ArticlesCardProps) {
  const stripHtml = (html: string) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  // const excerpt = stripHtml(article.content).slice(0, 120) + "...";

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
      <Link href={`/articles/${article._id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            width={400}
            height={200}
            src="/ali-abdaal-working-at-desk-with-books.png"
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-medium">
            {article.status}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-200">
            {article.title}
          </h3>
          {/* Excerpt */}
          {/* <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p> */}
          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
