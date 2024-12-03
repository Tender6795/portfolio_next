import React from "react";
import Image from "next/image";
import { CustomerReview } from "./CustomerReview";

export const ProjectInfo = () => {
  return (
    <div className="h-[460px] w-[905px] flex bg-transparent rounded-[20px] items-center">
      <div className="h-[417px] w-[588px] rounded-[20px] border-[3px] border-[#03A473] bg-[#03A4734D] flex items-center justify-center overflow-hidden">
        <Image 
          src="/avatar.jpeg" 
          alt="project"
          width={545}
          height={375}
          className="rounded-[20px]"
        />
      </div>

      <div className="h-[367px] w-[277px] flex flex-col justify-between ml-auto">
        {/* Первый компонент */}
        <div className="h-[185px] w-[277px] flex flex-col justify-center items-start">
          <h2 className="font-montserrat font-bold text-[16px] leading-[19.5px] mb-2">
            Заголовок компонента
          </h2>
          <p className="font-montserrat font-bold text-[12px] leading-[14.63px] text-[#64748B]">
            Текст описания или дополнительная информация.
          </p>
        </div>

        {/* Второй компонент */}
        <CustomerReview/>
      </div>
    </div>
  );
};
