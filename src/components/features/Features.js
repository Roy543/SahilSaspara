import React from "react";
import { FaCode, FaBrain, FaUser } from "react-icons/fa";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Dynamic Web Application Development"
          des="I specialize in ReactJS, VueJS, NodeJS, and MongoDB for creating engaging web experiences."
          icon={<FaCode />}
        />
        <Card
          title="Efficient Problem Solving"
          des="From performance optimization to user experience enhancements, I tackle challenges with smart solutions."
          icon={<FaBrain />}
        />
        <Card
          title="Versatile Collaboration"
          des="With experience in diverse teams, I bring adaptability and teamwork to every project."
          icon={<FaUser />}
        />
      </div>
    </section>
  );
};

export default Features;
