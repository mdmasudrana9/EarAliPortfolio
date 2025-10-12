import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <div className=" ">
      <main className="container rounded-b-xl bg-[#F9F6F3] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <Image
              height={500}
              width={500}
              src="/videocolleage.png"
              alt="Video content showcase illustration"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              My Videos
            </h1>

            <div className="space-y-4 max-w-lg text-foreground/80 text-lg leading-relaxed">
              <p>
                When I first started creating YouTube videos seven years ago, I
                had no idea that it would become the backbone of a multimillion
                dollar business. I still love creating videos – the process of
                researching, writing, and filming brings me a lot of joy, and
                it&apos;s brilliant to be able to share that with my subscribers
                and viewers.
              </p>

              <p>
                Below are some of my favourite videos that I&apos;ve made, along
                with some of our top performing content. Take a look and let me
                know what you think.
              </p>
            </div>

            <Link href="https://www.youtube.com/@md.yarali" className="pt-6">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe on YouTube
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
