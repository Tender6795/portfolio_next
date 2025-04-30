"use client"
import { useIsDesktop } from "./hooks/useIsDesktop";
import { AboutMe } from "./сomponents/AboutMe";
import { Footer } from "./сomponents/Footer";
import { Skills } from "./сomponents/Skills";
import { Works } from "./сomponents/Works";

export default function Home() {
  const isDesktop = useIsDesktop(1500);

  return (
    <div className={`w-[85.42%] flex flex-col items-end  ${isDesktop ? "ml-auto" : "mx-auto"}`}>
      <AboutMe />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}
