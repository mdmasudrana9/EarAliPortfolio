import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const JournalingSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  My Journalism Prompts Template
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
                  Get my list of journalism prompts that I use almost every day.
                  These help me figure out what I want in life and make better
                  decisions. Enjoy. ✨
                </p>
              </div>

              {/* Email Signup Form */}
              <div className="space-y-4 w-full max-w-md">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 w-full sm:w-auto">
                    Get the Prompts
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
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
              <div className="mx-auto max-w-sm ">
                <div className="rounded-lg border shadow-2xl">
                  <div className="rounded-md bg-gray-100 p-4 sm:p-8">
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
      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Hey, I&apos;m{" "}
                  <span className="text-primary underline decoration-2 underline-offset-4">
                    Ear Ali
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>
                  Since 2017, I&apos;ve been documenting my personal,
                  professional and entrepreneurial journey on YouTube...
                </p>
                <p>
                  This seems to have resonated with people, to the point that
                  our online community has grown...
                </p>
                <p>
                  It&apos;s been a pretty wild ride – from a dorm room at
                  Cambridge University...
                </p>
                <p>
                  If you&apos;ve supported any part of the journey... forever 😊
                </p>
              </div>

              <div className="pt-4 flex justify-center lg:justify-start">
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
                      className="w-full h-36 sm:h-48 object-cover"
                      width={300}
                      height={300}
                    />
                  </Card>
                  <Card className="overflow-hidden">
                    <Image
                      src="/ali-abdaal-working-at-desk-with-books.png"
                      alt="Ali working"
                      className="w-full h-28 sm:h-36 object-cover"
                      width={300}
                      height={300}
                    />
                  </Card>
                </div>
                <div className="space-y-4 pt-4 sm:pt-8">
                  <Card className="overflow-hidden">
                    <Image
                      src="/ali-abdaal-casual-portrait-smiling.png"
                      alt="Ali portrait"
                      className="w-full h-32 sm:h-44 object-cover"
                      width={300}
                      height={300}
                    />
                  </Card>
                  <Card className="overflow-hidden">
                    <Image
                      src="/ali-abdaal-with-camera-equipment.png"
                      alt="Ali with camera"
                      className="w-full h-24 sm:h-32 object-cover"
                      width={300}
                      height={300}
                    />
                  </Card>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-secondary rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              Watch My Videos
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              Read My Articles
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              Read My Book
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalingSection;
