"use client";
import { PlaceholderImage } from "@/constants/PlaceholderImage";
import { fetcher } from "@/lib/fetcher";
import { useProjectStore } from "@/stores/projectStore";
import { Project } from "@/types/Project";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import useSWR from "swr";

const Projects: NextPage = () => {
  const { projects, setProjects, setTotal, projectFilters, setProjectFilter } =
    useProjectStore();
  const [selectedFilter, setSelectedFilter] = useState("All Services");

  useSWR<Project[]>(
    selectedFilter !== "All Services"
      ? `/api/projects?service=${selectedFilter}`
      : `/api/projects`,
    fetcher,
    {
      onSuccess: (data) => {
        if (!data?.length) return;

        const projectFilterData = [
          ...new Set(["All Services", ...data.map((p) => p.mainService)]),
        ];
        setProjectFilter(projectFilterData);

        const filteredData =
          selectedFilter === "All Services"
            ? data
            : data.filter((p) => p.mainService === selectedFilter);

        const sortedData = filteredData.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setProjects(sortedData);

        const allServices = data.length;
        const totalMusic = data.filter(
          (p) => p.mainService === "Music Production"
        ).length;
        const totalDesign = data.filter(
          (p) => p.mainService === "Creative Design"
        ).length;
        const totalWebsite = data.filter(
          (p) => p.mainService === "Website Development"
        ).length;
        const totalEvent = data.filter(
          (p) => p.mainService === "Event & Media Services"
        ).length;

        setTotal({
          "All Services": allServices,
          "Music Production": totalMusic,
          "Creative Design": totalDesign,
          "Website Development": totalWebsite,
          "Event & Media Services": totalEvent,
        });
      },
    }
  );

  return (
    <section className="container px-6 lg:px-8 mx-auto mt-[60px]">
      <div className="flex flex-col lg:flex-row justify-beetween items-center gap-4 lg:gap-10">
        <h2 className="font-medium text-dark text-3xl lg:text-4xl lg:min-w-md">
          Selected Works That Speak for Themselves
        </h2>
        <div className="h-[1px] hidden lg:block w-full bg-dark/10"></div>
        <p className="lg:text-right text-sm font-light text-dark/70 lg:min-w-md">
          A collection of digital and sound projects crafted to help brands
          stand out and connect meaningfully.
        </p>
      </div>
      <div className="flex gap-2 md:gap-3 mt-6 sticky overflow-x-auto top-20 bg-white z-20 py-4">
        {projectFilters.map((service) => (
          <button
            key={`Weerworks ${service} Project`}
            onClick={() => setSelectedFilter(service)}
            className={`text-sm cursor-pointer rounded-full whitespace-nowrap flex items-center gap-x-2 py-2.5 px-3 border ${
              selectedFilter === service
                ? "bg-dark border-dark text-white"
                : "bg-dark/2 border-dark/10 text-dark"
            }`}
          >
            {service}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-x-3 gap-y-10">
        {projects.map((project, index) => (
          <div key={`Weerworks ${project.title} ${project.service} Project`}>
            <div className="mb-4 w-full aspect-square relative group overflow-hidden rounded-xl">
              {project.url && (
                <Link
                  target="_blank"
                  href={project.url}
                  className="absolute bg-dark/10 group-hover:opacity-100 opacity-0 inset-0 z-10 flex items-center justify-center transition-all ease-in-out duration-300"
                >
                  <button className="w-16 h-16 cursor-pointer rounded-full text-xl flex justify-center items-center bg-dark/80 aspect-square text-white transition-all ease-in-out duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <GoLinkExternal />
                  </button>
                </Link>
              )}
              <Image
                src={
                  project.imageURL
                    ? `https://drive.google.com/uc?export=view&id=${project.imageURL}`
                    : PlaceholderImage
                }
                fill
                className="object-cover rounded-xl border border-dark/5"
                alt={`Weerworks ${project.title} ${project.service} Project`}
              />
            </div>
            <p className="text-dark/70">
              {index < 9 ? `0${index + 1}` : index + 1}
            </p>
            <h6 className="text-lg font-medium text-dark mt-3 leading-6 line-clamp-2">
              {project.title}{" "}
            </h6>
            <p className="text-sm text-dark/70 mt-1">{project.service}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
