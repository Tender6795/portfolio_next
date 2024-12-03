import { AboutMe } from "./сomponents/AboutMe";
import { Footer } from "./сomponents/Footer";
import { Skills } from "./сomponents/Skills";
import { Works } from "./сomponents/Works";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Works />
      <Footer/>
    </div>
  );
}
