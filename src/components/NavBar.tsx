import React, { useEffect, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

function NavBar({ buttonName }: { buttonName: string[] }) {
  let [scrolledPixels, setscrolledPixels] = useState(0);
  window.addEventListener("scroll", () => {
    setscrolledPixels(window.scrollY);
  });

  return (
    <div className="flex">
      <div>
        <a href="https://www.linkedin.com/in/jawad-adel/" target="_blank">
          <SiLinkedin className="absolute top-6.5 left-8 right-1 text-stone-500" />
        </a>
        <a href="https://github.com/jawadAdelYoutube" target="_blank">
          <SiGithub className="absolute top-6.5 left-16 right-1 text-stone-500" />
        </a>
      </div>
      <div
        className={`fixed top-0 right-0 left-0 ${
          !(scrolledPixels > 10) || "shadow"
        } w-fit h-fit m-auto mt-3 p-1 rounded-4xl z-1000 text-center bg-white transition-shadow duration-500`}
      >
        <button
          className="rounded-4xl m-1 font-bold text-blue-500 hover:shadow"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </button>
        {buttonName.map((name) => (
          <button
            className="rounded-4xl m-1 font-semibold hover:shadow transition-shadow ease-out"
            onClick={() => {
              let target = document.getElementById(`${name.toLowerCase()}`);
              target?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
