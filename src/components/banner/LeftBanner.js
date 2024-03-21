import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGithub
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">HELLO THERE!!!</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Sahil Saspara</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          🚀 Hey there! I'm not just your average software engineer – I'm your
          tech-savvy problem-solving partner in crime! If you need someone to
          whip up some seriously snazzy web applications using ReactJS, VueJS,
          Node.JS, and MongoDB, well, you've found your match.
          <br />
          <br />
          With more years under my belt than I care to admit, I've honed my
          skills to ninja-level perfection. My secret weapon? A knack for
          spotting bugs quicker than a chameleon in a bag of Skittles and
          optimizing performance smoother than butter on a hot pan.
          <br />
          <br />
          I'm all about that collaboration vibe – let's team up and create some
          software magic together! Together, we'll turn those dreams of
          cutting-edge solutions into reality, driving business growth and
          success like a boss. Let's make some tech waves! 🌊💻
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a
              href="https://www.linkedin.com/in/sahil-saspara-64632718b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            </a>
            <a
              href="https://github.com/Roy543"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
              <FaGithub />
            </span>
            </a>
            <a
              href="https://twitter.com/SahilRoy_543"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
              <FaTwitter />
            </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaVuejs />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
