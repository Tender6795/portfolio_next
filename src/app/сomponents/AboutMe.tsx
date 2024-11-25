"use client";
import React from "react";
import { Avatar } from "./Avatar";

export const AboutMe = () => {
  return (
    <div className="flex justify-end items-center">
      <div className="w-[784px] h-[271px] mr-[-174px]">
        <h1 className="font-semibold text-[64px] leading-[78px]">
          {`Hello, I’m Illia, `}
          <br />
          {`a Full-Stack Developer`}
        </h1>
        <div className="w-[600px] h-[271px]">
          <span className="font-normal text-[14px] leading-[17px]">
            I'm a web developer with solid experience in Full-Stack development
            🚀 I can provide you the best suitable solutions for your
            requirements. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Morbi gravida nibh in luctus dictum. Quisque vitae lectus non
            neque condimentum volutpat non a tortor. Quisque nec lorem
            dignissim, finibus eros id.
          </span>
        </div>
      </div>
      <Avatar />
    </div>
  );
};
