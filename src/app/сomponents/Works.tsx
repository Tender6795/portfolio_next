import React from "react";
import { ProjectsShortInfo } from "./ProjectsShortInfo";
import { ProjectInfo } from "./ProjectInfo";
import Image from "next/image";

export const Works = () => {
  
  return (
    <div className="w-full flex justify-end items-center mt-[74px]">
      <div className="w-full flex flex-col items-start relative">
        <h1 className="font-semibold text-[64px] leading-[78px] mb-[40px]">
          Works-Set
        </h1>
        <ProjectsShortInfo />
        <ProjectInfo />
        <Image
          src="/paginator_3.svg"
          alt="Paginator"
          width={23}
          height={209}
          className="absolute"
          style={{ top: "465px", right: "213px" }}
        />
      </div>
    </div>
  );
};
