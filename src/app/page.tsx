import { AboutMe } from "./сomponents/AboutMe";
import { Footer } from "./сomponents/Footer";
import { Skills } from "./сomponents/Skills";
import { Works } from "./сomponents/Works";

export default function Home() {
  return (
    <div className="w-[85.42%] flex flex-col items-end ml-auto">
      <AboutMe />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}
