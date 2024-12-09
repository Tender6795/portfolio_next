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

  const downloadHandle = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-end gap-6 lg:gap-0">
      <div className="lg:w-[54.44%] lg:h-[16.88rem] lg:mr-[-12.08%] text-center lg:text-left">
        <h1 className="font-semibold text-responsive-h1 leading-responsive-h1">
          {`Hello, I’m Illia, `}
          <br />
          {`a Full-Stack Developer`}
        </h1>
        <div className="w-full lg:w-[80%] mx-auto lg:mx-0">
          <p className="font-normal text-responsive-p leading-responsive-p block">
            I&apos;m a web developer with over 5 years of expertise in
            Full-Stack development, specializing in the MERN stack (MongoDB,
            Express, ReactJS, and NodeJS). Throughout my career, I have created
            numerous robust web apps, focusing on clean, reusable code and best
            practices.
          </p>
          <p className="font-normal text-responsive-p leading-responsive-p mt-[2rem] block">
            I’ve developed solutions that drive business success and can
            recommend platforms, languages, and features to elevate your
            project. Let’s make it even better - feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-[1.25rem] mt-[4rem]">
            <Button text="Get in touch" onClick={getTouchHandle} />
            <Button
              text="Download CV"
              onClick={downloadHandle}
              className="bg-[#363636]"
            />
          </div>
        </div>
      </div>
      <Avatar />
    </div>
  );
};
