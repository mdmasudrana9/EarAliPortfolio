import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Rocket, Play, Smartphone, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Feel-Good Productivity",
    description:
      "My New York Times bestselling book about how to do more of what matters to you, while enjoying the journey along the way. 35+ languages, 2,000+ 5-star reviews ⭐",
    icon: BookOpen,
    color: "bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-600",
    hoverColor: "group-hover:from-yellow-200 group-hover:to-amber-200",
    link: "#",
  },
  {
    id: 2,
    title: "LifeOS",
    description:
      "The complete productivity system to help you manage your time, beat procrastination, and take consistent action towards your goals.",
    icon: Rocket,
    color: "bg-gradient-to-br from-green-100 to-emerald-100 text-green-600",
    hoverColor: "group-hover:from-green-200 group-hover:to-emerald-200",
    link: "#",
  },
  {
    id: 3,
    title: "Part-Time YouTuber Academy",
    description:
      "My courses, systems and templates to help you start, grow and monetise a YouTube channel that can positively change your life 🚀",
    icon: Play,
    color: "bg-gradient-to-br from-red-100 to-rose-100 text-red-600",
    hoverColor: "group-hover:from-red-200 group-hover:to-rose-200",
    link: "#",
  },
  {
    id: 4,
    title: "VoicePal",
    description:
      "The ghostwriter in your pocket that makes writing anything fun, more fun, and much more productive. Available on iOS and Android.",
    icon: Smartphone,
    color: "bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600",
    hoverColor: "group-hover:from-blue-200 group-hover:to-cyan-200",
    link: "#",
  },
];

export default function ProductShowcase() {
  return (
    <div className="bg-gradient-to-b from-background to-muted/20 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h1 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent mb-4 text-balance animate-fade-in">
              Explore Ali&apos;s Productivity Ecosystem
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up">
            Discover the complete suite of tools, courses, and resources
            designed to help you build a more productive and fulfilling life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={product.id}
                className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 backdrop-blur-sm bg-card/80 hover:bg-card hover:-translate-y-2 hover:scale-105 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div
                    className={`w-20 h-20 rounded-2xl ${product.color} ${product.hoverColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl relative z-10`}
                  >
                    <IconComponent className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-4 text-balance group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>

                  <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow text-pretty group-hover:text-foreground/80 transition-colors duration-300">
                    {product.description}
                  </p>

                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden"
                    asChild
                  >
                    <a
                      href={product.link}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-muted-foreground"></div>
            <span className="text-lg font-medium">
              Join thousands of people building more productive, fulfilling
              lives
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-muted-foreground"></div>
          </div>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
