import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { FaCode } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";

function About() {
  return (
    <div id="about">
      <div className="text-xs sm:text-base md:text-lg lg:text:2xl xl:text-4xl font-bold">
        About
      </div>
      <div className="m-2"></div>
      <BentoGrid className="max-w-4xl w-screen mx-auto mt-10 text-start">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i == 0 || i === 3 ? "md:col-span-2" : ""}
            num={item.num}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

//https://editor.p5js.org/jawadadel/sketches/a_vJu4XOT

const items = [
  {
    title: "Who am I",
    description:
      "I'm a web developer from Alexandria Egypt, I have been coding since I was 12 , I'm currently 17 and I'm looking always to populate my tech stack with new technologies",
    header: <Skeleton />,
    icon: <RxAvatar />,
  },
  {
    description: (
      <div>
        Languages: JavaScript, HTML, CSS, SQL
        <br />
        Frameworks & Libraries: React, React Native, Flask, Next.js, Tailwind
        CSS
      </div>
    ),
    header: <Skeleton />,
    icon: <FaCode />,
    num: 1,
  },
  {
    title: " What I'm Doing Now",
    description:
      "Currently exploring full-stack projects using Next.js and Firebase.",
    header: <Skeleton />,
    icon: <FaCode />,
  },
  {
    title: "Certificates",
    description: (
      <div>
        <a
          href="https://www.freecodecamp.org/certification/Jawad_Adel/responsive-web-design"
          target="_blank"
        >
          freeCodeCamp – Responsive Web Design
        </a>
        <br />
        <a
          href="https://www.freecodecamp.org/certification/Jawad_Adel/javascript-algorithms-and-data-structures-v8"
          target="_blank"
        >
          freeCodeCamp – JavaScript Algorithms and Data Structures
        </a>
      </div>
    ),
    header: <Skeleton />,
    icon: <TbFileCertificate />,
  },
];
export default About;
