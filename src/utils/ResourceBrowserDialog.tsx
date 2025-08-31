"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  FileText,
  BookOpen,
  Play,
  Mic,
  Mail,
  DollarSign,
  Youtube,
  GraduationCap,
  Globe,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const browseByTypeItems = [
  {
    name: "Articles",
    icon: FileText,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    name: "Book Notes",
    icon: BookOpen,
    iconColor: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    name: "Videos",
    icon: Play,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    name: "Podcast",
    icon: Mic,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    name: "Newsletter",
    icon: Mail,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
  },
];

const browseByTopicItems = [
  {
    name: "Productivity",
    icon: DollarSign,
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
  },
  {
    name: "YouTube",
    icon: Youtube,
    iconColor: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    name: "Studying",
    icon: GraduationCap,
    iconColor: "text-gray-600",
    bgColor: "bg-gray-50 dark:bg-gray-950/20",
  },
  {
    name: "Online Business",
    icon: Globe,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    name: "Tools & Tech",
    icon: Monitor,
    iconColor: "text-gray-700",
    bgColor: "bg-gray-50 dark:bg-gray-950/20",
  },
];

export function ResourceBrowserDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <a
          href="#resources"
          className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center"
        >
          Free Resources
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 !top-0 !left-0 !transform-none">
          {/* Browse by type */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Browse by type:</h2>
            <div className="space-y-4">
              {browseByTypeItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors text-left"
                    onClick={() => setOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${item.bgColor}`}>
                      <IconComponent className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <span className="text-lg font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Browse by topic */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Browse by topic:</h2>
            <div className="space-y-4">
              {browseByTopicItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors text-left"
                    onClick={() => setOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${item.bgColor}`}>
                      <IconComponent className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <span className="text-lg font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* All categories link */}
            <button
              className="flex items-center gap-2 mt-6 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              <span>all categories</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
