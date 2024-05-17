import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] flex flex-col gap-10">
          <ResumeCard
            title="MSc in Applied Computer Science"
            subTitle="SRH Hochschule Heidelberg, Germany (2021 - 2023)"
            result="2.0"
            des="Successfully completed Master's degree in Applied Computer Science from SRH Heidelberg, equipped with advanced knowledge and skills ready to tackle real-world challenges in Web development."
          />
          <ResumeCard
            title="B.Tech in Computer Science & Engineering"
            subTitle="Parul University (2016 - 2020)"
            result="2.3"
            des="Completed Bachelor's degree in Computer Science & Engineering from Parul University, laying a solid foundation of expertise and understanding, poised to excel in FullStach Development endeavors."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Current</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] flex flex-col gap-10">
          <ResumeCard
            title="Junior FullStack Developer"
            subTitle="BNN - (2023 - 2024)"
            result="Germany"
            des="Junior Full-Stack Developer at Badische Neueste Nachrichten, Karlsruhe, Germany, proficient in ReactJS for dynamic rendering, Docker for deployment consistency, and HTML/CSS/JavaScript for responsive interfaces. Experienced in SCSS for effective styling, Bitbucket for version control, and Jira/Confluence for project management."
          />
          <ResumeCard
            title="Working Student"
            subTitle="SAP SE - (2022 - 2023)"
            result="Germany"
            des="At SAP SE, as a Working Student, helped build a secure system with NodeJS, VueJS/ReactJS frontend, and SAP Analytics Cloud integration. Ensured robust security with ExpressJS, MongoDB, and rigorous Postman testing."
          />
          <ResumeCard
            title="Junior Full-Stack Developer"
            subTitle="Baruzo Tech PVT LTD - (2019 - 2021)"
            result="India"
            des="At BaruzoTech Pvt. Ltd., successfully developed and deployed Node.js applications with Express.js, gained AWS deployment experience, and optimized performance, scalability, and security using Node.js, React.js, and AWS best practices during internship."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
