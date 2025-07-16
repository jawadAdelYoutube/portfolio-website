import React from "react";
import { Spotlight } from "./SpotlightNew";
import NavBar from "./NavBar";
import { TypewriterEffect } from "./TypeWriterEffect";

let wordlist = [{ text: "Hello," }, { text: "I'm" }, { text: "Jawad" }];

function Hero() {
  return (
    <div id="home">
      <Spotlight />
      <NavBar buttonName={["Projects", "About"]} />
      <TypewriterEffect words={wordlist} className="m-6 sm:text-8xl" />
      <div className="text-stone-500 m-6 font-medium">
        A front-end web developer from Egypt, <br /> creating websites focused
        on clean design and fast performance.
      </div>
    </div>
  );
}

export default Hero;
