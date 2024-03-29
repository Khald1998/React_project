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
      <div
        className={`bg-inherit flex justify-center mx-auto 
      xxs:w-10/12 
      xs:w-8/12
      md:col-span-7 md:items-center md:h-[70lvh] md:w-11/12 md:ml-2
      xl:h-[100lvh] xl:col-span-6 
      `}
      >
        <div className="max-md:mb-5 mx-auto flex flex-col justify-start items-start max-md:w-full">

          <div className="w-full mx-auto max-xs:w-[80%]">
            <div className="w-full flex justify-start items-center">
              <h1
                className="font-bold text-tertiary dark:text-tertiary uppercase
            xxs:text-base
            xs:text-lg
            sm:text-xl
            md:text-base
            lg:text-2xl
            "
              >
                About
              </h1>
            </div>
            <div
              className="w-full flex justify-start items-center 
          xxs:h-10 xxs:my-4
          lg:my-8 lg:h-16
          "
            >
              <h3
                className="font-bold dark:text-whitey text-blacky font-dynamic 
            xxs:text-xl
            xs:text-2xl
            sm:text-3xl
            md:text-xl
            lg:text-4xl
            xl:text-5xl
            "
              >
                {displayedBuzzword}
              </h3>
            </div>
          </div>

          <div className={`relative max-md:mx-auto max-md:w-full ${!loadedAll ? "max-xxs:h-[190px] max-mobM:h-[205px] max-xs:h-[200px] max-sm:h-[230px] max-md:h-[210px]" : "max-xxs:h-[500px] max-mobM:h-[620px] max-xs:h-[535px] max-sm:h-[595px] max-md:h-[535px]"} transition-all ease-in-out duration-300`}>
            <div
              className=" 
          xxs:text-sm
          xs:text-base
          sm:text-lg
          md:text-sm
          lg:text-base 

          max-md:absolute max-md:left-0 max-md:right-0 max-md:top-0 max-md:mx-auto max-xxs:w-full max-xs:w-[80%]
          "
            >
              <p className="leading-relaxed dark:text-whitey text-blacky ">
                I'm <span className="dark:text-tertiary text-tertiary"> Khaled Alzahrani</span>, a
                <span className="dark:text-tertiary text-tertiary"> highly motivated</span> student
                seeking an internship in the{" "}
                <span className="dark:text-tertiary text-tertiary"> cloud</span> and
                <span className="dark:text-tertiary text-tertiary"> computer engineering</span>{" "}
                field. With a strong background in
                <span className="dark:text-tertiary text-tertiary"> computer engineering</span>
                <span className={`md:hidden ${!loadedAll ? "" : "hidden"}`}>
                  ...
                </span>
                <span
                  className={`${
                    !loadedAll ? "max-md:opacity-0" : "max-md:opacity-100"
                  } transition-opacity ease-in-out duration-700`}
                >
                  , including experience in
                  <span className="text-tertiary dark:text-tertiary"> embedded systems</span> and
                  <span className="text-tertiary dark:text-tertiary"> web development</span>, I
                  ameager to enhance my{" "}
                  <span className="text-tertiary dark:text-tertiary"> social</span> and{" "}
                  <span className="text-tertiary dark:text-tertiary"> engineering skills</span>{" "}
                  while pursuing my ambitions. I possess a{" "}
                  <span className="text-tertiary dark:text-tertiary"> proactive mindset</span>,
                  excellent
                  <span className="text-tertiary dark:text-tertiary">
                    {" "}
                    problem-solving abilities
                  </span>
                  , and a passion for staying up-to-date with the{" "}
                  <span className="text-tertiary dark:text-tertiary"> latest technologies</span>. I
                  thrive in
                  <span className="text-tertiary dark:text-tertiary">
                    {" "}
                    collaborative environments{" "}
                  </span>
                  and am driven to contribute to the advancement of the
                  industry. With a strong{" "}
                  <span className="text-tertiary dark:text-tertiary"> work ethic </span>and a
                  commitment to{" "}
                  <span className="text-tertiary dark:text-tertiary"> continuous growth</span>, I
                  am confident in my ability to make a valuable contribution as
                  an <span className="text-tertiary dark:text-tertiary"> intern</span>.
                </span>
              </p>
            </div>
            <div
              className="mx-auto w-full
          xxs:my-4
          sm:my-8
          md:hidden
          max-md:absolute max-md:left-0 max-md:right-0 max-md:bottom-0
          "
            >
              <Button
                text={`${!loadedAll ? "Load More" : "Load Less"}`}
                onClick={loadMore}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Info;
