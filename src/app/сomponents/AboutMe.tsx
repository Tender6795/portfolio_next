"use client";
import React from "react";
import { Avatar } from "./Avatar";
import { Button } from "../ui/Button";

export const AboutMe = () => {
  const getTouchHandle = () => {
    window.open(
      "https://www.upwork.com/freelancers/~010a21f1a8bbd4727d",
      "_blank"
    );
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
        <div className="w-[600px]">
          <span className="font-normal text-[14px] leading-[17px] block">
            I&apos;m a web developer with over 5 years of expertise in
            Full-Stack development, specializing in the MERN stack (MongoDB,
            Express, ReactJS, and NodeJS). Throughout my career, I have created
            numerous robust web apps, focusing on clean, reusable code and best
            practices..
          </span>
          <span className="font-normal text-[14px] leading-[17px] mt-[30px] block">
            I’ve developed solutions that drive business success and can
            recommend platforms, languages, and features to elevate your
            project. Let’s make it even better - feel free to reach out!
          </span>
          <div className="flex gap-[20px] mt-[60px]">
            <Button text="Get in touch" onClick={getTouchHandle} />
            <Button
              text="Download CV"
              onClick={downloadHanlde}
              className="bg-[#363636]"
            />
          </div>
        </div>
      </div>
      <Avatar />
    </div>
  );
};
