"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 
import CustomerReview from "./CustomerReview";
import { data } from "../data";

export const ProjectInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <motion.div
        className="h-[460px] w-[905px] flex bg-transparent rounded-[20px] items-center"
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.7 }} 
      >
        <div className="h-[417px] w-[588px] rounded-[20px] border-[3px] border-[#03A473] bg-[#03A4734D] flex items-center justify-center overflow-hidden">
          <Image
            src={data[currentIndex].srcImage}
            alt="project"
            height={375}
            width={545}
            className="rounded-[20px] object-cover w-[545px] h-[375px]"
          />
        </div>

        <div className="h-[367px] w-[277px] flex flex-col justify-between ml-auto">
          <div className="h-[185px] w-[277px] flex flex-col justify-center items-start">
            <h2 className="font-montserrat font-bold text-[16px] leading-[19.5px] mb-2">
              {data[currentIndex].title}
            </h2>
            <p className="font-montserrat font-bold text-[12px] leading-[14.63px] text-[#64748B]">
              {data[currentIndex].desc}
            </p>
          </div>

          <CustomerReview {...data[currentIndex].review} />
        </div>
      </motion.div>

      <div className="mt-4 flex gap-[18px]">
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
