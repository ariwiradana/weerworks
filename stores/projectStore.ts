import { Project } from "@/types/Project";
import { create } from "zustand";

type ProjectStore = {
  projects: Project[];
  projectFilters: string[];
  total: {
    "All Services": number;
    "Music Production": number;
    "Creative Design": number;
    "Website Development": number;
    "Event & Media Services": number;
  };
  setProjects: (projects: Project[]) => void;
  setProjectFilter: (projectFilters: string[]) => void;
  setTotal: (total: {
    "All Services": number;
    "Music Production": number;
    "Creative Design": number;
    "Website Development": number;
    "Event & Media Services": number;
  }) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  projectFilters: [],
  total: {
    "All Services": 0,
    "Music Production": 0,
    "Creative Design": 0,
    "Website Development": 0,
    "Event & Media Services": 0,
  },
  setProjects: (projects) => set({ projects }),
  setProjectFilter: (projectFilters) => set({ projectFilters }),
  setTotal: (total) => set({ total }),
}));
