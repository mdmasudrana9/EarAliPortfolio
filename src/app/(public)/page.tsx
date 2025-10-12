import HelpSection from "@/components/publicc/HelpSection";
import Hero from "@/components/publicc/Hero";
import JournalingSection from "@/components/publicc/JournalingSection";
import LifeNotesSubscription from "@/components/publicc/LifeNotesSubscription";
import { PopularResources } from "@/components/publicc/PopularResources";
import ProductShowcase from "@/components/publicc/ProductShowcase";
import { VideoGallery } from "@/components/publicc/VideoGallery";

const page = () => {
  return (
    <div>
      <Hero />
      {/* <AnimatedHero /> */}
      <HelpSection />
      <JournalingSection />
      {/* <PopularVideos /> */}
      <VideoGallery />
      {/* <PopularResources /> */}
      {/* <ProductShowcase /> */}
      <LifeNotesSubscription />
    </div>
  );
};

export default page;
