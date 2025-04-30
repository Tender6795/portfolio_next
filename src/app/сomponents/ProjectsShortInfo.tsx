import React from "react";
import { Devider } from "../ui/Devider";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const ProjectsShortInfo = () => {
  const isDesktop = useIsDesktop(1500);

  return (
    <div
      className={`h-[100px] bg-[#03A4734D] rounded-[20px] flex mb-[90px] ${
        isDesktop ? "w-[88.75%]" : "w-full"
      }`}
    >
      <div className="flex-1 flex items-center justify-start pl-[2vw]">
        <div className="flex flex-row items-center mr-[1vw]">
          <div className="text-[5vw] md:text-[3vw] lg:text-[2.5vw] font-[600] leading-[calc(text-size*1.2)] text-left font-montserrat mr-[0.5vw]">
            10+
          </div>
          <div className="text-[1.8vw] md:text-[1.2vw] lg:text-[0.9vw] font-[600] leading-[calc(text-size*1.1)] text-left font-montserrat mr-[1vw]">
            successful
            <br />
            projects
          </div>
        </div>
      </div>

      <Devider />

      <div className="flex-1 flex items-center justify-start pl-[2vw]">
        <div className="flex flex-row items-center mr-[1vw]">
          <div className="text-[5vw] md:text-[3vw] lg:text-[2.5vw] font-[600] leading-[calc(text-size*1.2)] text-left font-montserrat mr-[0.5vw]">
            1000+
          </div>
          <div className="text-[1.8vw] md:text-[1.2vw] lg:text-[0.9vw] font-[600] leading-[calc(text-size*1.1)] text-left font-montserrat mr-[1vw]">
            hours
            <br />
            of work
          </div>
        </div>
      </div>

      <Devider />

      <div className="flex-1 flex items-center justify-start pl-[2vw]">
        <div className="flex flex-row items-center">
          <div className="text-[5vw] md:text-[3vw] lg:text-[2.5vw] font-[600] leading-[calc(text-size*1.2)] text-left font-montserrat mr-[0.5vw]">
            $300K+
          </div>
          <div className="text-[1.8vw] md:text-[1.2vw] lg:text-[0.9vw] font-[600] leading-[calc(text-size*1.1)] text-left font-montserrat">
            earned
            <br />
            by clients
          </div>
        </div>
      </div>
    </div>
  );
};