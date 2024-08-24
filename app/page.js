import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import OurService from "@/components/OurService";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero></Hero>
      <AboutUs></AboutUs>
      <OurService></OurService>
    </div>
  );
}
