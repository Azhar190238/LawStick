import AboutUs from "@/components/AboutUs";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Expert from "@/components/Expert";
import Hero from "@/components/Hero";
import OurService from "@/components/OurService";
import Team from "@/components/Team/Team";
import WhatWeUs from "@/components/WhatWeUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero></Hero>
      <AboutUs></AboutUs>
      <OurService></OurService>
      <WhatWeUs></WhatWeUs>
      <Team></Team>
      <Expert></Expert>
      <Experience></Experience>
      <Blog></Blog>
    </div>
  );
}
