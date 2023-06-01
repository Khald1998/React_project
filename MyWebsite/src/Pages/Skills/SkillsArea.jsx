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
import Button from "./Button";

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
  const sizes = {
    xxs: 300,
    xs: 420,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [displayedSkills, setDisplayedSkills] = useState(skills.length);
  const [loadedAll, setLoadedAll] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= sizes.xxs) {
      setDisplayedSkills(4);
      setLoadedAll(false);
    } else if (screenSize <= sizes.xs) {
      setDisplayedSkills(6);
      setLoadedAll(false);
    } else if (screenSize <= sizes.sm) {
      setDisplayedSkills(7);
      setLoadedAll(false);
    } else if (screenSize <= sizes.md) {
      setDisplayedSkills(9);
      setLoadedAll(false);
    } else {
      setDisplayedSkills(skills.length);
      setLoadedAll(true);
    }
  }, [screenSize]);

  const loadMoreSkills = () => {
    setDisplayedSkills(skills.length);
    setLoadedAll(true);
  };

  return (
    <>
      <div className="text-whitey mx-auto h-1/2 w-10/12 flex flex-wrap flex-row gap-x-8 mt-24">
        {skills.slice(0, displayedSkills).map((skill) => (
          <Skill key={skill.text} icon={skill.icon} text={skill.text} />
        ))}
      </div>
      {!loadedAll && <Button onClick={loadMoreSkills} />}
    </>
  );
}

export default SkillsArea;
