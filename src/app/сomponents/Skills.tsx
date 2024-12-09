"use client";
import React from "react";
import { Skill } from "../ui/Skill";
import { motion } from "framer-motion";
import Image from "next/image";

export const Skills = () => {
  const skills = [
    "React",
    "Nest",
    "Next",
    "Redux Toolkit",
    "Redux",
    "Prisma",
    "Node",
    "Postgres",
    "CSS",
    "HTML",
    "JavaScript",
    "TypeScript",
    "Express",
  ];

  return (
    <div className="w-full flex justify-end items-center mt-[130px]">
      <div className="w-full flex justify-between items-start">
        <div className="flex flex-col items-start w-full md:w-[calc(100%-304px)]">
          <h1 className="font-semibold text-[64px] leading-[78px] mb-[40px]">
            Skill-Set
          </h1>
          <div className="flex flex-wrap gap-x-[20px] gap-y-[40px] w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-grow"
              >
                <Skill skillName={skill} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-[304px] relative">
          <Image
            src="/paginator_2.svg"
            alt="Paginator"
            width={23}
            height={209}
            className="absolute top-[317px] right-[213px]"
          />
        </div>
      </div>
    </div>
  );
};
