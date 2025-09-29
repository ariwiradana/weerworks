import ButtonLight from "@/components/ui/ButtonLight";
import { NextPage } from "next";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Hero: NextPage = () => {
  return (
    <section className="mt-20 container mx-auto md:px-8">
      <div className="h-[380px] md:h-[480px] w-full relative">
        <Image
          fill
          alt="Weerworks Hero Image"
          src="/images/hero.png"
          className="object-cover md:rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
          <h1 className="text-white font-medium text-4xl md:text-5xl">
            All in One Creative Hub
            <br />
          </h1>
          <p className="text-white mt-3 leading-6 max-w-lg">
            Weerworks is a creative studio offering music production and
            impactful websites for brands and creators.
          </p>
          <div className="mt-6">
            <ButtonLight title="Explore Works" icon={<GoArrowUpRight />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
