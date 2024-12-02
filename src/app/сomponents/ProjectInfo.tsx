import React from "react";
import Image from "next/image";

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

      <div className="h-[367px] w-[277px] rounded-[20px] border-[3px] border-[#03A473] bg-[#03A4734D] flex items-center justify-center ml-auto">
        <p className="text-white text-[16px] text-center">
          Второй компонент с заполнением любым текстом. Здесь можно добавить
          больше содержимого или изменить стиль.
        </p>
      </div>
    </div>
  );
};
