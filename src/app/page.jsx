import Button from "@/components/Button";
import Categories from "@/components/Categories";
import FeaturedItems from "@/components/FeaturedItems";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import WhyAnalog from "@/components/WhyAnalog";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <FeaturedItems></FeaturedItems>
      <History></History>
      <WhyAnalog></WhyAnalog>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
}

