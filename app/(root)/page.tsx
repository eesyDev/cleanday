// import { Hero } from "@/components";
import Advantages from "@/components/Advantages/Advantages";
import CallToAction from "@/components/CallToAction/CallToAction";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero/Hero";
import IncludesList from '@/components/InclusdesList/IncludesList'
import Image from "next/image";
import { includesItems } from "@/lib/data";

export default function Home() {
  console.log(includesItems);
  return (
    <div className="">
      <Hero />
      <Advantages/>
      <Divider classes="h-[96px]" />
      <CallToAction/>
      <Divider classes="h-[96px]" />
      <IncludesList 
        title="Что входит в уборку квартиры"
        subtitle="Мы убираем квартиры в Алматы с 2018 года и знаем, что нужно нашим клиентам. Вот список услуг, которые входят в уборку квартиры."
        itemsList={includesItems}
      />
    </div>
  );
}
