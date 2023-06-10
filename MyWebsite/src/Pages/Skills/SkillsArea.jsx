import Skill from "./Skill";
import { FaReact, FaHtml5, FaJava, FaPython } from "react-icons/fa";
import {
  SiTerraform,
  SiAnsible,
  SiDocker,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiCplusplus,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { MdCss } from "react-icons/md";
import { DiMongodb } from "react-icons/di";
import { GiLogicGateAnd } from "react-icons/gi";
import React, { useState, useEffect } from "react";

const skills = [
  { icon: <FaReact />, text: "React" },
  { icon: <SiTerraform />, text: "Terraform" },
  { icon: <SiAnsible />, text: "Ansible" },
  { icon: <FaHtml5 />, text: "HTML" },
  { icon: <SiDocker />, text: "Docker" },
  { icon: <FaJava />, text: "Java" },
  { icon: <TbBrandGolang />, text: "Golang" },
  { icon: <SiJavascript />, text: "Javascript" },
  { icon: <MdCss />, text: "CSS" },
  { icon: <SiBootstrap />, text: "Bootstrap" },
  { icon: <SiTailwindcss />, text: "Tailwindcss" },
  { icon: <FaPython />, text: "Python" },
  { icon: <SiCplusplus />, text: "C++" },
  { icon: <SiNodedotjs />, text: "Node.js" },
  { icon: <DiMongodb />, text: "Mongodb" },
  { icon: <GiLogicGateAnd />, text: "Verilog" },
];

function SkillsArea() {

  return (
    <>
      <div className="text-whitey mx-auto w-10/12 flex flex-wrap flex-row gap-x-8 gap-y-4 
      max-md:absolute max-md:left-0 max-md:right-0
      md:pb-24
      ">
        {skills.map((skill) => (
          <Skill key={skill.text} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </>
  );
}

export default SkillsArea;
