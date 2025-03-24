import React from "react";
import { Devider } from "../ui/Devider";

export const ProjectsShortInfo = () => {
  return (
    <div className="w-[88.75%] h-[100px] bg-[#03A4734D] rounded-[20px] flex mb-[90px]">
      <div className="flex-1 flex items-center justify-start pl-[20px]">
        <div className="flex flex-row items-center mr-[20px]">
          <div className="text-[57.6px] font-[600] leading-[70.22px] text-left font-montserrat mr-[10px]">
            10+
          </div>
          <div className="text-[21.6px] font-[600] leading-[23.4px] text-left font-montserrat mr-[20px]">
            successful  
            <br />
            projects
          </div>
        </div>
      </div>

      <Devider />

      <div className="flex-1 flex items-center justify-start pl-[20px]">
        <div className="flex flex-row items-center mr-[20px]">
          <div className="text-[57.6px] font-[600] leading-[70.22px] text-left font-montserrat mr-[10px]">
            1000+
          </div>
          <div className="text-[21.6px] font-[600] leading-[23.4px] text-left font-montserrat mr-[20px]">
            hours  
            <br />
            of work
          </div>
        </div>
      </div>

      <Devider />

      <div className="flex-1 flex items-center justify-start pl-[20px]">
        <div className="flex flex-row items-center">
          <div className="text-[57.6px] font-[600] leading-[70.22px] text-left font-montserrat mr-[10px]">
            $300K+
          </div>
          <div className="text-[21.6px] font-[600] leading-[23.4px] text-left font-montserrat">
            earned  
            <br />
            by clients
          </div>
        </div>
      </div>
    </div>
  );
};
