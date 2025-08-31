import Hero from "@/components/publicc/Hero";
import { AnimatedBackground } from "@/utils/AnimatedBackground";

export default function AnimatedHero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
