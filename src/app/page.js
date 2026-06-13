import JobHeroSection from "@/Components/JobHeroSection";
import StateSection from "@/Components/StateSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative bg-zinc-50 font-sans dark:bg-black">
     <JobHeroSection/>
     <StateSection/>
    </div>
  );
}
