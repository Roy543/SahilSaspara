import React from "react";
import Title from "../layouts/Title";
import {
  house,
  brainwave,
  nike,
  supernotes,
  college,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Nike Landing Page"
          des={
            <p>
              In my Nike Landing Page project, I ran the show with{" "}
              <span className="text-designColor font-bold">
                ReactJS, JavaScript, HTML,
              </span>{" "}
              and <span className="text-designColor font-bold">CSS</span>,
              spicing things up with{" "}
              <span className="text-designColor font-bold">Vite</span> and{" "}
              <span className="text-designColor font-bold">Tailwind CSS</span>.
              With lightning-fast builds courtesy of{" "}
              <span className="text-designColor font-bold">Vite</span>,
              responsive designs thanks to{" "}
              <span className="text-designColor font-bold">Tailwind CSS</span>,
              every visitor got the full Nike experience. And with{" "}
              <span className="text-designColor font-bold">ReactJS</span>, I
              made sure every click felt like stepping into a premium sneaker
              store.
            </p>
          }
          src={nike}
          github="https://github.com/Roy543/Nike"
          live="https://nike-landing-lage.vercel.app/"
        />
        <ProjectsCard
          title="Brainwave Landing Page"
          des={
            <p>
              In BrainWave, I orchestrated a cerebral spectacle, weaving
              together <span className="text-designColor font-bold">JavaScript, HTML, CSS,</span> and <span className="text-designColor font-bold">ReactJS</span> into a dynamic
              single-page marvel. With <span className="text-designColor font-bold">Vite's</span> swift builds and <span className="text-designColor font-bold">Tailwind CSS's</span>
              responsive design, I made every screen a canvas. And with <span className="text-designColor font-bold">ReactJS</span>,
              I turned static content into a <span className="text-designColor font-bold">Dynamic Experience</span>, sparking
              engagement like a lightning bolt in a brainstorm.
            </p>
          }
          src={brainwave}
          github="https://github.com/Roy543/brainwave-main"
          live="https://brainwave-main-eta.vercel.app/"
        />
        <ProjectsCard
          title="House Market Place"
          des={<p>I turned houses into hotcakes in the House Marketplace project, juggling <span className="text-designColor font-bold">ReactJS</span> like a pro, adding a sprinkle of <span className="text-designColor font-bold">SwiperJS</span> magic for that swipe-right satisfaction, and tossing <span className="text-designColor font-bold">Firebase</span> into the mix for real-time data fireworks. Basically, I made selling houses as smooth as butter on a hot skillet!!,</p>}
          src={house}
          github="https://github.com/Roy543/house-marketplace-main"
          live="https://house-marketplace-tawny-theta.vercel.app/"
        />
        <ProjectsCard
          title="College Learning Resource"
          des={<p>In the College Learning Resource project, I built a cutting-edge platform with <span className="text-designColor font-bold">JavaScript, HTML, CSS, ReactJS, NodeJS,</span> and <span className="text-designColor font-bold">ExpressJS</span>. Real-time collaboration was made possible with <span className="text-designColor font-bold">Socket.io-client</span>, while <span className="text-designColor font-bold">Three.js</span> brought subjects to life in immersive 3D. <span className="text-designColor font-bold">MongoDB</span> and <span className="text-designColor font-bold">Mongoose</span> handled data seamlessly, and <span className="text-designColor font-bold">SunCalc</span> added a touch of magic for contextual learning experiences.</p>}
          src={college}
          github="https://github.com/Roy543/college-practical-app-main"
          live="https://college-practicals.vercel.app/"
        />
        <ProjectsCard
          title="SuperNotes with Face Recognition"
          des={<p>In SuperNotes with Face Recognition, I crafted a robust web app using <span className="text-designColor font-bold">NodeJS, ExpressJS, MongoDB</span>, and <span className="text-designColor font-bold">PassportJS</span> for the backend. With <span className="text-designColor font-bold">Face-API.js</span>, I added <span className="text-designColor font-bold">Face Recognition</span> for note organization. <span className="text-designColor font-bold">jQuery</span> and <span className="text-designColor font-bold">Bootstrap</span> boosted user engagement, and advanced <span className="text-designColor font-bold">JavaScript</span> and <span className="text-designColor font-bold">EJS</span> templating ensured seamless frontend-backend integration.</p>}
          src={supernotes}
          github="https://github.com/Roy543/SuperNotes"
          live="https://supernote.onrender.com/login"
        />
      </div>
    </section>
  );
};

export default Projects;
