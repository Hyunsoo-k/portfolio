interface ProjectDataType {
  projectName: string;
  position: "프론트엔드" | "서버";
  personnel: "1인 개발" | "팀 개발";
  introduce: string;
  feature: string[];
  link: {
    deployment: string | null,
    gitHub: string
  };
  background: string;
  detail: string;
  technologyStack: string[];
  image?: string[];
};

export type { ProjectDataType };