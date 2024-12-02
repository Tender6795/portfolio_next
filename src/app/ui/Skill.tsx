import React from "react";

export const Skill = ({ skillName }: { skillName: string }) => {
  return (
    <div className="w-[266px] h-[100px] rounded-[20px] bg-[#03A4734D] font-montserrat text-[30px] font-medium leading-[36.5px] text-center flex items-center justify-center">
      {skillName}
    </div>
  );
};
