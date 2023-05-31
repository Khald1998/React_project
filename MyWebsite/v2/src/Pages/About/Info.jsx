import React, { useEffect, useState, useRef } from "react";

function Info() {
  const buzzword = [
    "Developer",
    "Designer",
    "Problem solver",
    "Freelancer",
    "Coffeeholic",
    "Globetrotter",
  ];
  const [state, setState] = useState({
    arrayIndex: 0,
    characterIndex: 0,
    forward: true,
  });
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
              if (characterIndex == currentBuzzword.length) {
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

  const displayedBuzzword = buzzword[state.arrayIndex].substring(0, state.characterIndex);


  return (
    <>
    <div className="my-5 mx-auto flex flex-col justify-center items-start
    xxs:w-11/12 xxs:h-4/6
    xs:h-5/6
    ">
      <div className="w-full flex justify-start items-center
      xxs:h-1/6
      md:h-auto
      lg:w-5/6
      ">
        <h1 className="font-bold text-white uppercase ">
          About
        </h1>
      </div>
      <div className="w-full flex justify-start items-center
      xxs:h-1/6 xxs:mb-5
      sm:h-2/6 sm:mb-0
      md:h-1/6
      lg:w-5/6
      ">
        <h3 className="font-bold text-white font-display
        xxs:text-3xl
        sm:text-5xl 
        ">
          {displayedBuzzword}
        </h3>
      </div>
      <div className="
      lg:w-5/6
      ">
        <p className="leading-relaxed text-white 
        xxs:text-sm xxs:h-full 
        md:text-base
        ">
          I'm Khaled Alzahrani, a highly motivated student who is looking for an
          internship opportunity in the cloud and computer engineering field to
          improve my social and engineering skills and fulfill my ambitions.
        </p>
      </div>
    </div>

    </>
  );
}

export default Info;
