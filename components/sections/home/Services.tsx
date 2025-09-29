import ButtonDark from "@/components/ui/ButtonDark";
import { ServicesData } from "@/constants/ServicesData";
import { NextPage } from "next";
import Link from "next/link";
import { GoArrowUpRight, GoLinkExternal } from "react-icons/go";

const Services: NextPage = () => {
  return (
    <section className="container mx-auto mt-[60px]">
      <div className="flex flex-col lg:flex-row justify-beetween items-center gap-4 lg:gap-10 px-8">
        <h2 className="font-medium text-dark text-3xl lg:text-4xl lg:min-w-md">
          What We Offer for Your Creative Needs
        </h2>
        <div className="h-[1px] hidden lg:block w-full bg-dark/10"></div>
        <p className="lg:text-right text-sm font-light text-dark/70 lg:min-w-md">
          Weerworks offers music production, custom jingles, and impactful
          websites to help your brand stand out.
        </p>
      </div>
      <div className="flex flex-col mt-10 divide-y divide-dark/10">
        {ServicesData.map((service, index) => (
          <div
            className={`grid grid-cols-4 gap-4 transition-all ease-in-out duration-300 p-10 hover:bg-dark/2`}
            key={`Weerworks ${service.label} Service`}
          >
            <p className="font-medium text-dark col-span-4 md:col-span-1">
              0{index + 1}
            </p>
            <div className="col-span-4 md:col-span-3">
              <h3 className="font-medium text-dark text-2xl md:text-[28px] leading-9">
                {service.label}
              </h3>
              <div className="flex gap-x-3 gap-y-1 items-center flex-wrap mt-3">
                {service.services.map((item) => (
                  <li
                    key={`Weerworks ${item} Service`}
                    className="list-inside text-dark "
                  >
                    {item}
                  </li>
                ))}
              </div>
              <p className="text-sm font-light mt-3 text-dark">
                {service.description}
              </p>
              <div className="mt-5">
                {service.path ? (
                  <Link target="_blank" href={service.path}>
                    <ButtonDark title="Visit Site" icon={<GoLinkExternal />} />
                  </Link>
                ) : (
                  <ButtonDark title="Let's Talk" icon={<GoArrowUpRight />} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
