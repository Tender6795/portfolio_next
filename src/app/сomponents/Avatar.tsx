import Image from "next/image";
import React from "react";

export const Avatar = () => {
  return (
    <div className="relative w-[616px] h-[734px] overflow-hidden">
      <Image
        src="/avatar.png"
        alt="Background"
        layout="fill"  
        objectFit="cover"  
        className="absolute top-0 left-0"
        style={{ maskImage: 'url("/Rectangle.svg")', maskSize: 'cover', maskPosition: 'center' }}
      />
      <Image
        src="/paginator.svg"
        alt="Paginator"
        width={23}  
        height={209}
        className="absolute"
        style={{ top: "417px", right: "213px" }}
      />
    </div>
  );
};
