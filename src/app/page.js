import JobHeroSection from "@/Components/JobHeroSection";
import JobSection from "@/Components/JobSection";
import StateSection from "@/Components/StateSection";
import FeaturesSection from "@/Components/FeaturesSection";
import PricingSection from "@/Components/PriceingSection";
import CTASection from "@/Components/CTASection";

export default function Home() {
  return (
    <div className=" relative bg-zinc-50 font-sans dark:bg-black">
     <JobHeroSection/>
     <StateSection/>◘
     <JobSection/>
     <FeaturesSection/>
     <PricingSection/>
     <CTASection/>
     
    </div>
  );
}
