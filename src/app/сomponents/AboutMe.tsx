"use client";
import React from "react";
import { Avatar } from "./Avatar";
import { Button } from "../ui/Button";

export const AboutMe = () => {

  const getTouchHandle = () => {
    window.open("https://www.upwork.com/freelancers/~010a21f1a8bbd4727d", "_blank"); 
  };

  const downloadHanlde = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf"; 
    link.download = "CV.pdf";  
    link.click(); 
  };

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
        <div className="flex gap-[20px] mt-[60px]"> 
          <Button text="Get in touch" onClick={getTouchHandle} />
          <Button
            text="Download CV"
            onClick={downloadHanlde}
            className="bg-[#363636]"
          />
        </div>
      </div>
      <Avatar />
    </div>
  );
};
