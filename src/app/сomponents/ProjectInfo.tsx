"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomerReview from "./CustomerReview";
import { data } from "../data";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const ProjectInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  const isDesktop = useIsDesktop(1500);

  return (
    <div className="relative w-full">
      <motion.div
        className={`h-auto ${
          isDesktop ? "w-[905px]" : "w-full flex-col"
        } flex bg-transparent rounded-[20px] items-start md:items-center`}
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className={`rounded-[20px] border-[3px] border-[#03A473] bg-[#03A4734D] overflow-hidden ${
            isDesktop ? "w-[588px] h-[417px] mr-auto" : "w-full h-auto mb-4"
          }`}
        >
          <Image
            src={data[currentIndex].srcImage}
            alt="project"
            width={545}
            height={375}
            className="rounded-[20px] object-cover w-full h-full"
          />
        </div>

        <div
          className={`flex flex-col justify-between ${
            isDesktop ? "w-[277px] ml-auto" : "w-full"
          }`}
        >
          <div className="flex flex-col justify-center items-start w-full">
            <h2 className="font-montserrat font-bold text-[16px] leading-[19.5px] mb-2 w-full">
              {data[currentIndex].title}
            </h2>
            <p className="font-montserrat font-bold text-[12px] leading-[14.63px] text-[#64748B] w-full">
              {data[currentIndex].desc}
            </p>
          </div>

          <CustomerReview {...data[currentIndex].review} className="w-full" />
        </div>
      </motion.div>

      <div className="mt-4 flex gap-[18px] justify-center md:justify-start">
        {data.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-[10.7px] h-[10.7px] rounded-full cursor-pointer`}
            initial={{ scale: 1 }}
            animate={{
              scale: currentIndex === index ? 1.3 : 1,
              backgroundColor: currentIndex === index ? "#03A473" : "#FFFFFF",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};