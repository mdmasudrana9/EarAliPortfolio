import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Viral Thumbnail Pack",
    description:
      "Supercharge your YouTube videos with a complete toolkit to make thumbnails easy and effective.",
    bgColor: "bg-gradient-to-br from-slate-400 via-blue-400 to-slate-500",
    icon: "📸",
    accent: "from-slate-200 to-blue-200",
  },
  {
    id: 2,
    title: "7 Video Challenge",
    description:
      "Stop watching, start creating with the 7 Video Challenge - Make 7 Videos, Launch Your Channel, Get Your Money Back.",
    bgColor: "bg-gradient-to-br from-rose-300 via-pink-400 to-rose-400",
    icon: "🎥",
    accent: "from-rose-100 to-pink-200",
  },
  {
    id: 3,
    title: "LifeOS",
    description:
      "Stop wasting time and start making progress with my holistic productivity system - LifeOS.",
    bgColor: "bg-gradient-to-br from-green-300 via-emerald-400 to-green-400",
    icon: "🧠",
    accent: "from-green-100 to-emerald-200",
  },
  {
    id: 4,
    title: "Part-Time YouTuber Academy",
    description:
      "Discover the proven strategies and techniques to thrive on YouTube",
    bgColor: "bg-gradient-to-br from-orange-300 via-amber-400 to-orange-400",
    icon: "🎬",
    accent: "from-orange-100 to-amber-200",
  },
  {
    id: 5,
    title: "7 Day Focus Crash Course",
    description:
      "Unlock the Power of Laser Focus in Just 7 Days with this free crash course",
    bgColor: "bg-gradient-to-br from-indigo-300 via-purple-400 to-indigo-400",
    icon: "🎯",
    accent: "from-indigo-100 to-purple-200",
  },
];

export function PopularResources() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col sm:flex-row items-start justify-between mb-8 sm:mb-12 gap-6 sm:gap-4">
        <div className="relative">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-foreground mb-2 text-balance leading-tight">
            Check Out My Most
          </h2>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-foreground relative text-balance leading-tight">
            Popular Resources
            {/* <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-24 sm:w-32 lg:w-40 h-2 sm:h-3 bg-gradient-to-r from-amber-200 to-orange-200 -z-10 transform -rotate-1 animate-pulse"></div> */}
            <Sparkles className="absolute -top-2 -right-8 sm:-right-12 h-6 w-6 sm:h-8 sm:w-8 text-amber-400 animate-pulse" />
          </h2>
        </div>

        <div className="flex gap-2 sm:gap-3 self-end sm:self-start">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 shadow-lg hover:shadow-xl h-10 w-10 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 shadow-lg hover:shadow-xl h-10 w-10 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        {resources.map((resource, index) => (
          <Card
            key={resource.id}
            className={`${resource.bgColor} border-0 text-white overflow-hidden relative group hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="p-4 sm:p-6 h-full flex flex-col min-h-[280px] sm:min-h-[320px]">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl filter drop-shadow-lg">
                  {resource.icon}
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-balance leading-tight">
                {resource.title}
              </h3>

              <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 flex-grow leading-relaxed text-pretty">
                {resource.description}
              </p>

              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 backdrop-blur-sm justify-start p-0 h-auto font-medium group-hover:translate-x-1 transition-all duration-300 text-sm sm:text-base"
              >
                View{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/10 backdrop-blur-sm rounded-full -translate-y-3 -translate-x-3 sm:-translate-y-4 sm:-translate-x-4 group-hover:scale-110 transition-transform duration-300"></div>

            <div
              className={`absolute inset-0 bg-gradient-to-t ${resource.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-12 lg:hidden">
        <Button className="bg-gradient-to-r from-amber-300 to-orange-300 hover:from-amber-400 hover:to-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          View All Resources
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
