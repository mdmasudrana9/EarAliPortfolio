import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";
const JournalingSection = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-5xl">
                  My Journaling Prompts Template
                </h1>
                <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                  Get my list of journaling prompts that I use almost every day.
                  These help me figure out what I want in life and make better
                  decisions. Enjoy. ✨
                </p>
              </div>

              {/* Email Signup Form */}
              <div className="space-y-4">
                <div className="flex gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                    Get the Prompts
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground max-w-md">
                  By completing this form, you&apos;ll receive an email with a
                  link to the free resource and you&apos;ll be subscribed to my
                  <a href="#" className="text-primary hover:underline">
                    {" "}
                    terms
                  </a>{" "}
                  or
                  <a href="#" className="text-primary hover:underline">
                    {" "}
                    privacy policy
                  </a>{" "}
                  if you like the website.
                </p>
              </div>
            </div>

            {/* Right Content - Laptop Mockup */}
            <div className="relative">
              <div className="relative mx-auto max-w-lg">
                <div className="rounded-lg bg-gray-900 p-2 shadow-2xl">
                  <div className="rounded-md bg-gray-100 p-8">
                    <Image
                      src="/journaling-template-with-prompts-and-questions.png"
                      alt="Journaling Hub Template Preview"
                      className="w-full rounded-sm"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                  Hey, I&apos;m{" "}
                  <span className="text-primary underline decoration-2 underline-offset-4">
                    Ear Ali
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Since 2017, I&apos;ve been documenting my personal,
                  professional and entrepreneurial journey on YouTube, sharing
                  the books, strategies, ideas and tools that I&apos;ve found
                  most helpful over the years to help us be more productive,
                  live more intentionally and build a life we love.
                </p>

                <p>
                  This seems to have resonated with people, to the point that
                  our online community has grown to 5 million followers on
                  social media (mostly on YouTube and Instagram, although
                  we&apos;re also growing on X/Twitter, LinkedIn and TikTok
                  too).
                </p>

                <p>
                  It&apos;s been a pretty wild ride – from a dorm room at
                  Cambridge University, to working full-time as a doctor during
                  the pandemic, to leaving Medicine to build a business and a
                  life I feel much more passionate about.
                </p>

                <p>
                  If you&apos;ve supported any part of the journey, for any
                  length of time – thank you so much. None of this could&apos;ve
                  happened without you, and I hope to continue building and
                  sharing useful stuff online, for free, forever 😊
                </p>
              </div>

              <div className="pt-4">
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Read my full story →
                </Button>
              </div>
            </div>

            {/* Right Content - Photo Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="overflow-hidden">
                    <Image
                      src="/ali-abdaal-presenting-on-stage.png"
                      alt="Ali presenting"
                      className="w-full h-48 object-cover"
                      width={300}
                      height={300}
                    />
                  </Card>
                  <Card className="overflow-hidden">
                    <Image
                      src="/ali-abdaal-working-at-desk-with-books.png"
                      alt="Ali working"
                      className="w-full h-36 object-cover"
                      width={300}
                      height={300}
                    />
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="overflow-hidden">
                    <Image
                      src="/ali-abdaal-casual-portrait-smiling.png"
                      alt="Ali portrait"
                      className="w-full h-44 object-cover"
                      width={300}
                      height={300}
                    />
                  </Card>
                  <Card className="overflow-hidden">
                    <Image
                      src="/ali-abdaal-with-camera-equipment.png"
                      alt="Ali with camera"
                      className="w-full h-32 object-cover"
                      width={300}
                      height={300}
                    />
                  </Card>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Watch My Videos
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Read My Articles
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Read My Book
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalingSection;
