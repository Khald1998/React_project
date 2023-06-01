import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";

function Info() {
  const buzzword = [
    "Developer",
    "Designer",
    "Problem solver",
    "Engineer",
    "Thinker",
    "Enthusiastic",
  ];

  const sizes = {
    xxs: 300,
    xs: 420,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  const [state, setState] = useState({
    arrayIndex: 0,
    characterIndex: 0,
    forward: true,
  });

  const [loadedAll, setLoadedAll] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const animationFrameId = useRef(null);
  const lastUpdateTime = useRef(0);
  const delay = useRef(200);

  useEffect(() => {
    const animate = (timestamp) => {
      if (timestamp - lastUpdateTime.current > delay.current) {
        setState((prevState) => {
          let { arrayIndex, characterIndex, forward } = prevState;
          const currentBuzzword = buzzword[arrayIndex];

          if (forward) {
            if (characterIndex < currentBuzzword.length) {
              characterIndex += 1;
              if (characterIndex === currentBuzzword.length) {
                delay.current = 1000;
              }
            } else {
              forward = false;
              delay.current = 50;
            }
          } else {
            if (characterIndex > 0) {
              characterIndex -= 1;
            } else {
              forward = true;
              delay.current = 200;
              arrayIndex = (arrayIndex + 1) % buzzword.length;
            }
          }

          return { arrayIndex, characterIndex, forward };
        });
        lastUpdateTime.current = timestamp;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

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
    if (
      screenSize <= sizes.xxs ||
      screenSize <= sizes.xs ||
      screenSize <= sizes.sm ||
      screenSize <= sizes.md
    ) {
      setLoadedAll(false);
    } else {
      setLoadedAll(true);
    }
  }, [screenSize]);

  const displayedBuzzword = buzzword[state.arrayIndex].substring(
    0,
    state.characterIndex
  );

  const loadMoreSkills = () => {
    setLoadedAll(true);
  };

  return (
    <>
      <div
        className={`bg-inherit flex justify-center items-center w-full
        max-xxs:h-${!loadedAll ? "[50vh]" : "[90vh]"}
        xxs:h-${!loadedAll ? "[50vh]" : "[90vh]"}
        xs:h-${!loadedAll ? "[40vh]" : "[90vh]"}
        sm:h-[60vh]
        md:h-[70vh] md:col-span-7
        lg:h-[70vh] lg:col-span-7 
        xl:h-[100vh] xl:col-span-6  
        `}
      >
        <div
          className={`my-5 mx-auto flex flex-col  justify-start items-start xxs:w-10/12 xxs:h-5/6 xs:h-5/6 md:justify-center`}
        >
          <div
            className={`w-full flex justify-start items-center xxs:h-10 md:h-auto lg:w-5/6`}
          >
            <h1 className="font-bold text-tertiary uppercase max-xs:text-xs">
              About
            </h1>
          </div>
          <div
            className={`w-full flex justify-start items-center xxs:h-16 xs:h-20 sm:h-24 xxs:mb-5   sm:mb-0 md:h-1/6 lg:w-5/6`}
          >
            <h3 className="font-bold text-white font-dynamic xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-5xl">
              {displayedBuzzword}
            </h3>
          </div>
          <div className="lg:w-5/6 xxs:min-h-fit">
            <p className="leading-relaxed text-white xxs:text-sm xxs:h-full md:text-base">
              I'm <span className="text-tertiary"> Khaled Alzahrani</span>, a<span className="text-tertiary"> highly motivated</span> student seeking an internship in the <span className="text-tertiary"> cloud</span> and<span className="text-tertiary"> computer engineering</span> field. With a strong background in<span className="text-tertiary"> computer engineering</span>
              <span className={`${!loadedAll ? "" : "hidden"}`}>...</span>
              <span className={`${!loadedAll ? "max-sm:hidden" : ""}`}>
                , including experience in<span className="text-tertiary"> embedded systems</span> and<span className="text-tertiary"> web development</span>, I ameager to enhance my <span className="text-tertiary"> social</span> and <span className="text-tertiary"> engineering skills</span> while pursuing my ambitions. I possess a <span className="text-tertiary"> proactive mindset</span>, excellent<span className="text-tertiary"> problem-solving abilities</span>, and a passion for staying up-to-date with the <span className="text-tertiary"> latest technologies</span>. Ithrive in<span className="text-tertiary"> collaborative environments </span>and am driven to contribute to the advancement of the industry. With a strong <span className="text-tertiary"> work ethic </span>and a commitment to <span className="text-tertiary"> continuous growth</span>, I am confident in my ability to make a valuable contribution as an <span className="text-tertiary"> intern</span>.</span>
            </p>
          </div>
          {!loadedAll && <Button onClick={loadMoreSkills} />}
        </div>
      </div>
    </>
  );
}

export default Info;
