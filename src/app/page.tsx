import Image from "next/image";
import { AboutMe } from "./сomponents/AboutMe";
import { Skills } from "./сomponents/Skills";

export default function Home() {
  return (
    <div>
      <AboutMe/>
      <Skills/>
    </div>
  );
}
