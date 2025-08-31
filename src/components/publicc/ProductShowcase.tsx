import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Rocket, Play, Smartphone } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Feel-Good Productivity",
    description:
      "My New York Times bestselling book about how to do more of what matters to you, while enjoying the journey along the way. 35+ languages, 2,000+ 5-star reviews ⭐",
    icon: BookOpen,
    color: "bg-yellow-100 text-yellow-600",
    link: "#",
  },
  {
    id: 2,
    title: "LifeOS",
    description:
      "The complete productivity system to help you manage your time, beat procrastination, and take consistent action towards your goals.",
    icon: Rocket,
    color: "bg-green-100 text-green-600",
    link: "#",
  },
  {
    id: 3,
    title: "Part-Time YouTuber Academy",
    description:
      "My courses, systems and templates to help you start, grow and monetise a YouTube channel that can positively change your life 🚀",
    icon: Play,
    color: "bg-red-100 text-red-600",
    link: "#",
  },
  {
    id: 4,
    title: "VoicePal",
    description:
      "The ghostwriter in your pocket that makes writing anything fun, more fun, and much more productive. Available on iOS and Android.",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-600",
    link: "#",
  },
];

export default function ProductShowcase() {
  return (
    <div className=" bg-background pt-30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Ear Ali&apos;s Productivity Ecosystem
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the complete suite of tools, courses, and resources
            designed to help you build a more productive and fulfilling life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 rounded-lg ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-card-foreground mb-3 text-balance">
                    {product.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow text-pretty">
                    {product.description}
                  </p>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={product.link}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Join thousands of people building more productive, fulfilling lives
          </p>
        </div>
      </div>
    </div>
  );
}
