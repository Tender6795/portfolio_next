import React from "react";

export const Avatar = () => {
  return (
    <div className="relative w-[616px] h-[734px] overflow-hidden">
      <img
        src="/avatar.jpeg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ maskImage: 'url("/Rectangle.svg")', maskSize: 'cover', maskPosition: 'center' }}
      />
    </div>
  );
};
