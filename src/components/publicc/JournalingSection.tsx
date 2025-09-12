import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const JournalingSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>

        <div className="mx-auto max-w-7xl relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  My Journalism Prompts Template
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                  Get my list of journalism prompts that I use almost every day.
                  These help me figure out what I want in life and make better
                  decisions. Enjoy. ✨
                </p>
              </div>

              {/* Email Signup Form */}
              <div className="space-y-4 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 transition-all duration-300 hover:shadow-md hover:border-primary/50 focus:scale-[1.02] focus:shadow-lg"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 group">
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Get the Prompts
                    </span>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By completing this form, you&apos;ll receive an email with a
                  link to the free resource and you&apos;ll be subscribed to my
                  <a
                    href="#"
                    className="text-primary hover:underline transition-all duration-200 hover:text-primary/80"
                  >
                    {" "}
                    terms
                  </a>{" "}
                  or
                  <a
                    href="#"
                    className="text-primary hover:underline transition-all duration-200 hover:text-primary/80"
                  >
                    {" "}
                    privacy policy
                  </a>{" "}
                  if you like the website.
                </p>
              </div>
            </div>

            {/* Right Content - Laptop Mockup */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-600">
              <div className="mx-auto max-w-sm">
                <div className="rounded-lg border shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:-rotate-1 group">
                  <div className="rounded-md bg-gray-100 p-4 sm:p-8 transition-all duration-300 group-hover:bg-gray-50">
                    <Image
                      src="/journaling-template-with-prompts-and-questions.png"
                      alt="Journaling Hub Template Preview"
                      className="w-full rounded-sm transition-all duration-300 group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/40 to-transparent"></div>

        <div className="mx-auto max-w-7xl relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Hey, I&apos;m{" "}
                  <span className="text-primary underline decoration-2 underline-offset-4 hover:decoration-4 transition-all duration-300 cursor-default">
                    Ear Ali
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                <p className="animate-in fade-in slide-in-from-left-4  delay-200 hover:text-foreground/80 transition-colors duration-300">
                  Since 2017, I&apos;ve been documenting my personal,
                  professional and entrepreneurial journey on YouTube...
                </p>
                <p className="animate-in fade-in slide-in-from-left-4  delay-400 hover:text-foreground/80 transition-colors duration-300">
                  This seems to have resonated with people, to the point that
                  our online community has grown...
                </p>
                <p className="animate-in fade-in slide-in-from-left-4  delay-600 hover:text-foreground/80 transition-colors duration-300">
                  It&apos;s been a pretty wild ride – from a dorm room at
                  Cambridge University...
                </p>
                <p className="animate-in fade-in slide-in-from-left-4  delay-800 hover:text-foreground/80 transition-colors duration-300">
                  If you&apos;ve supported any part of the journey... forever 😊
                </p>
              </div>

              <div className="pt-4 flex justify-center lg:justify-start animate-in fade-in slide-in-from-left-4 duration-700 delay-1000">
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Read my full story →
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Content - Photo Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-rotate-1 group">
                    <Image
                      src="/ali-abdaal-presenting-on-stage.png"
                      alt="Ali presenting"
                      className="w-full h-36 sm:h-48 object-cover transition-all duration-500 group-hover:scale-110"
                      width={300}
                      height={300}
                    />
                  </Card>
                  <Card className="overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-1 group">
                    <Image
                      src="/ali-abdaal-working-at-desk-with-books.png"
                      alt="Ali working"
                      className="w-full h-28 sm:h-36 object-cover transition-all duration-500 group-hover:scale-110"
                      width={300}
                      height={300}
                    />
                  </Card>
                </div>
                <div className="space-y-4 pt-4 sm:pt-8">
                  <Card className="overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-1 group">
                    <Image
                      src="/ali-abdaal-casual-portrait-smiling.png"
                      alt="Ali portrait"
                      className="w-full h-32 sm:h-44 object-cover transition-all duration-500 group-hover:scale-110"
                      width={300}
                      height={300}
                    />
                  </Card>
                  <Card className="overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-rotate-1 group">
                    <Image
                      src="/ali-abdaal-with-camera-equipment.png"
                      alt="Ali with camera"
                      className="w-full h-24 sm:h-32 object-cover transition-all duration-500 group-hover:scale-110"
                      width={300}
                      height={300}
                    />
                  </Card>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-secondary rounded-full opacity-40 animate-bounce delay-500"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/30 rounded-full animate-ping delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/10 to-background"></div>

        <div className="mx-auto max-w-4xl text-center space-y-8 relative">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto transition-all  hover:scale-105 hover:shadow-lg hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                Watch My Videos
              </span>
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto transition-all  hover:scale-105 hover:shadow-lg hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                Read My Articles
              </span>
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto transition-all  hover:scale-105 hover:shadow-lg hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                Read My Book
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalingSection;
