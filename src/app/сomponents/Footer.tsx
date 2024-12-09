"use client"
import React from "react";
import { Button } from "../ui/Button";

export const Footer = () => {
  const getTouchHandle = () => {
    window.open(
      "https://www.upwork.com/freelancers/~010a21f1a8bbd4727d",
      "_blank"
    );
  };

  return (
    <div className="w-[88.75%] h-[106px] bg-[#03A473] rounded-[20px]  mt-[137px] mb-[90px] flex items-center px-[60px] justify-between mr-[210px]">
      <p className="font-montserrat text-[40px] font-semibold leading-[48.76px] text-left">
        Let’s work together! Hire me!
      </p>
      <Button text="Get in touch" onClick={getTouchHandle} className="bg-[#363636]" />
    </div>
  );
};
