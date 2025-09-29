"use client";
import CountUp from "@/components/ui/CountUp";
import { useProjectStore } from "@/stores/projectStore";
import { NextPage } from "next";

const Stats: NextPage = ({}) => {
  const { total } = useProjectStore();

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 divide-x container mx-auto md:px-8 divide-dark/10">
      <div className="px-8 py-5 border-b md:border-b-0">
        <CountUp
          from={0}
          to={total["All Services"]}
          separator=","
          direction="up"
          duration={1}
          className="text-[28px] font-medium text-dark"
        />
        <p className="text-sm text-dark/70 mt-2">Creative Partners</p>
      </div>

      <div className="px-8 py-5 border-b md:border-b-0">
        <CountUp
          from={0}
          to={total["Music Production"]}
          separator=","
          direction="up"
          duration={1}
          className="text-[28px] font-medium text-dark"
        />
        <p className="text-sm text-dark/70 mt-2">Tracks & Jingles Produced</p>
      </div>

      {/* <div className="px-8 py-5">
        <CountUp
          from={0}
          to={total["Creative Design"]}
          separator=","
          direction="up"
          duration={1}
          className="text-[28px] font-medium text-dark"
        />
        <p className="text-sm text-dark/70 mt-2">Brand Designs & Visuals</p>
      </div> */}

      <div className="px-8 py-5">
        <CountUp
          from={0}
          to={total["Website Development"]}
          separator=","
          direction="up"
          duration={1}
          className="text-[28px] font-medium text-dark"
        />
        <p className="text-sm text-dark/70 mt-2">Websites Crafted</p>
      </div>

      <div className="px-8 py-5">
        <CountUp
          from={0}
          to={total["Event & Media Services"]}
          separator=","
          direction="up"
          duration={1}
          className="text-[28px] font-medium text-dark"
        />
        <p className="text-sm text-dark/70 mt-2">Events & Media Moments</p>
      </div>
    </section>
  );
};

export default Stats;
