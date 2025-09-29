import { NextPage } from "next";
import Hero from "../sections/home/Hero";
import Stats from "../sections/home/Stats";
import Services from "../sections/home/Services";
import Projects from "../sections/home/Projects";

const HomeLayout: NextPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Projects />
    </>
  );
};

export default HomeLayout;
