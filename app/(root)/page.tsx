// import { Hero } from "@/components";
import Advantages from "@/components/Advantages/Advantages";
import CallToAction from "@/components/CallToAction/CallToAction";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Advantages/>
      <Divider classes="h-[96px]" />
      <CallToAction/>
    </div>
  );
}
