import SkillsHeadline from "./SkillsHeadline";
import SkillsArea from "./SkillsArea";
import Button from "./Button"
import { useState,useEffect } from "react";

function main() {
    const [loadedAll, setLoadedAll] = useState(false);

    const loadMoreSkills = () => {
    setLoadedAll(!loadedAll);
  };
  return (
    <>
      <section id="Skills" className="bg-second w-full relative">
        <SkillsHeadline/>
        <SkillsArea />
        <Button mode={loadedAll} text={`${!loadedAll?"Load More":"Load Less"}`} onClick={loadMoreSkills} />
        
        <hr className="h-px w-2/6 bg-white-200 border-1 absolute mx-auto left-0 right-0 bottom-0 opacity-40"/>
      </section>
    </>
  );
}

export default main;


  // const sizes = {
  //   xxs: 300,
  //   xs: 420,
  //   sm: 640,
  //   md: 768,
  //   lg: 1024,
  //   xl: 1280,
  // };

  // const [screenSize, setScreenSize] = useState(window.innerWidth);
  // const [displayedSkills, setDisplayedSkills] = useState(skills.length);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setScreenSize(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (screenSize <= sizes.xxs) {
  //     setDisplayedSkills(4);
  //     setLoadedAll(false);
  //   } else if (screenSize <= sizes.xs) {
  //     setDisplayedSkills(6);
  //     setLoadedAll(false);
  //   } else if (screenSize <= sizes.sm) {
  //     setDisplayedSkills(7);
  //     setLoadedAll(false);
  //   } else if (screenSize <= sizes.md) {
  //     setDisplayedSkills(9);
  //     setLoadedAll(false);
  //   } else {
  //     setDisplayedSkills(skills.length);
  //     setLoadedAll(true);
  //   }
  // }, [screenSize]);


