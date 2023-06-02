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

  const loadMore = () => {
    setLoadedAll(!loadedAll);
  };

  return (
    <>
      <div className={`bg-inherit flex justify-center mx-auto 
      xxs:h-fit xxs:w-5/6 xxs:items-start
      xs:w-4/6
      ${!loadedAll?"sm:h-[50svh]":"sm:h-fit"}
      md:col-span-7 md:items-center md:h-[70svh] md:w-11/12 md:ml-0
      xl:h-[100svh] xl:col-span-6 

      
      `}>
        <div className="my-5 mx-auto flex flex-col justify-start items-start ">
          <div className="w-full flex justify-start items-center">
            <h1 className="font-bold text-tertiary uppercase
            xxs:text-base
            xs:text-lg
            sm:text-xl
            md:text-base
            lg:text-2xl
            ">
              About
            </h1>
          </div>
          <div className="w-full flex justify-start items-center 
          xxs:h-10 xxs:my-4
          lg:my-8 lg:h-16
          ">
            <h3 className="font-bold text-white font-dynamic 
            xxs:text-xl
            xs:text-2xl
            sm:text-3xl
            md:text-xl
            lg:text-4xl
            xl:text-5xl
            ">
              {displayedBuzzword}
            </h3>
          </div>
          <div className=" 
          xxs:text-sm
          xs:text-base
          sm:text-lg
          md:text-sm
          lg:text-base 
          ">
            <p className="leading-relaxed text-white ">
              I'm <span className="text-tertiary"> Khaled Alzahrani</span>, a<span className="text-tertiary"> highly motivated</span> student seeking an internship in the <span className="text-tertiary"> cloud</span> and<span className="text-tertiary"> computer engineering</span> field. With a strong background in<span className="text-tertiary"> computer engineering</span>
              <span className={`md:hidden ${!loadedAll ? "" : "hidden"}`}>...</span>
              <span className={`${!loadedAll ? "max-md:hidden" : ""}`}>
                , including experience in<span className="text-tertiary"> embedded systems</span> and<span className="text-tertiary"> web development</span>, I ameager to enhance my <span className="text-tertiary"> social</span> and <span className="text-tertiary"> engineering skills</span> while pursuing my ambitions. I possess a <span className="text-tertiary"> proactive mindset</span>, excellent<span className="text-tertiary"> problem-solving abilities</span>, and a passion for staying up-to-date with the <span className="text-tertiary"> latest technologies</span>. Ithrive in<span className="text-tertiary"> collaborative environments </span>and am driven to contribute to the advancement of the industry. With a strong <span className="text-tertiary"> work ethic </span>and a commitment to <span className="text-tertiary"> continuous growth</span>, I am confident in my ability to make a valuable contribution as an <span className="text-tertiary"> intern</span>.
            </span>
            </p>
          </div>
          <div className="mx-auto w-full
          xxs:my-4
          sm:my-8
          md:hidden
          ">
          <Button text={`${!loadedAll?"Load More":"Load Less"}`} onClick={loadMore}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
