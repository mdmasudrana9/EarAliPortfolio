import HelpSection from "@/components/publicc/HelpSection";
import Hero from "@/components/publicc/Hero";
import JournalingSection from "@/components/publicc/JournalingSection";
import LifeNotesSubscription from "@/components/publicc/LifeNotesSubscription";
import { PopularResources } from "@/components/publicc/PopularResources";
import PopularVideos from "@/components/publicc/PopularVideosSection";
import ProductShowcase from "@/components/publicc/ProductShowcase";

const page = () => {
  return (
    <div>
      <Hero />
      {/* <AnimatedHero /> */}
      <HelpSection />
      <JournalingSection />
      <PopularVideos />
      <PopularResources />
      <ProductShowcase />
      <LifeNotesSubscription />
    </div>
  );
};

export default page;
