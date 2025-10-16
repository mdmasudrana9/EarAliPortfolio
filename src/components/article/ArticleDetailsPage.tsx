"use client";

import { Button } from "@/components/ui/button";
import { IArticle } from "@/redux/features/articles/types";
import { Calendar, Clock, Heart, Share2, User2 } from "lucide-react";
import Image from "next/image";

// TipTap renderer

const ArticleDetailsPage = ({ article }: { article: IArticle }) => {
  // Extract first image from content (for cover image)
  const extractFirstImage = (html: string): string | null => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  const articleTags = ["React", "TypeScript", "Web Development", "UI/UX"];

  const coverImage =
    typeof article.content === "string"
      ? extractFirstImage(article.content)
      : null;

  // 🔥 Handle JSON or HTML string
  // const getContentHtml = () => {
  //   if (!article.content) return "";

  //   if (typeof article.content === "string") {
  //     return article.content; // already HTML
  //   }

  //   try {
  //     // assume it's JSON
  //     return generateHTML(article.content, [StarterKit]);
  //   } catch (error) {
  //     console.error("Error generating HTML from JSON:", error);
  //     return "";
  //   }
  // };

  // const contentHtml = getContentHtml();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative container mx-auto overflow-hidden rounded-b-2xl bg-[#F9F6F3] border-b border-border/50">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="relative max-w-4xl mx-auto px-6 py-16 space-y-8">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-200/10 text-primary border border-primary/20 font-medium">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              {article.status}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            {article.title}
          </h1>

          {/* Author & Reading Time */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#8960DB] flex items-center justify-center ">
                <User2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{"Yar Ali"}</p>
                <p className="text-sm text-muted-foreground">
                  Author & Developer
                </p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative mb-5 p-4 w-full h-[400px] max-w-4xl mx-auto">
          <Image
            height={400}
            width={800}
            src={
              coverImage ||
              "https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            }
            alt="Article cover"
            className="w-full h-full object-cover rounded-xl shadow-card"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl" />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <article className="relative">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {articleTags && articleTags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {articleTags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EEEBFF] text-accent-foreground border border-accent-foreground/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#8960DB] flex items-center justify-center ">
                  <User2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">
                    {"Yar Ali"}
                  </h4>
                  <p className="text-muted-foreground">Author & Developer</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Published on{" "}
                    {new Date(article.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-smooth"
                >
                  <Heart className="w-4 h-4" />
                  Like
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-smooth"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetailsPage;
