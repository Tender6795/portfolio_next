import React from "react";
import { ProjectsShortInfo } from "./ProjectsShortInfo";
import { ProjectInfo } from "./ProjectInfo";

export const Works = () => {
  return (
    <div className="w-full flex justify-end items-center mt-[74px]">
      <div className="w-[1230px] flex flex-col items-start">
        <h1 className="font-semibold text-[64px] leading-[78px] mb-[40px]">
          Works-Set
        </h1>
        <ProjectsShortInfo />
        <ProjectInfo/>
      </div>
    </div>
  );
};
