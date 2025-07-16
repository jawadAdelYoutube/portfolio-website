import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

//Hi, I'm Jawad — a front-end developer passionate about clean design and fast performance.
function App() {
  return (
    <>
      <div className="overflow-hidden mt-30 sm:text-4xl lg:text-[1em]">
        <Hero />
        <div className="flex items-center text-center m-auto justify-center">
          <SiReact className="text-stone-500 text-5xl m-3 hover:text-[#61DAFB] transition ease-out duration-300" />
          <SiJavascript className="text-stone-500 text-5xl m-3 hover:text-[#F7DF1E] transition ease-out duration-300" />
          <SiTailwindcss className="text-stone-500 text-5xl m-3 hover:text-[#38BDF8] transition ease-out duration-300" />
          <SiHtml5 className="text-stone-500 text-5xl m-3 hover:text-[#E34F26] transition ease-out duration-300" />
          <SiCss3 className="text-stone-500 text-5xl m-3 hover:text-[#1572B6] transition ease-out duration-300" />
        </div>
        <div className="m-40"></div>
        <About />
        <div className="m-40"></div>
        <Projects />
      </div>
    </>
  );
}

export default App;
