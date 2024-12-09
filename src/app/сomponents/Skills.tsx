"use client";
import React from "react";
import Image from "next/image";
import { Skill } from "../ui/Skill";
import { motion } from "framer-motion";

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
      <div className="w-full flex justify-between">
        <div className="w-[926px] flex flex-col items-start">
          <h1 className="font-semibold text-[64px] leading-[78px] mb-[40px]">
            Skill-Set
          </h1>
          <div className="flex flex-wrap gap-x-[20px] gap-y-[40px]">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="w-[30%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
            className="absolute top-[317px]"
          />
        </div>
      </div>
    </div>
  );
};
