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

  const frameRef = useRef();
  const lastTimeRef = useRef();

  useEffect(() => {
    const animate = (timestamp) => {
      if (lastTimeRef.current !== undefined) {
        if (timestamp - lastTimeRef.current > 200) {
          setState((prevState) => {
            let { arrayIndex, characterIndex, forward } = prevState;
            const currentBuzzword = buzzword[arrayIndex];

            if (forward) {
              if (characterIndex < currentBuzzword.length) {
                characterIndex += 1;
              } else {
                forward = false;
              }
            } else {
              if (characterIndex > 0) {
                characterIndex -= 1;
              } else {
                forward = true;
                arrayIndex = (arrayIndex + 1) % buzzword.length;
              }
            }

            return { arrayIndex, characterIndex, forward };
          });

          lastTimeRef.current = timestamp;
        }
      } else {
        lastTimeRef.current = timestamp;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const displayedBuzzword = buzzword[state.arrayIndex].substring(
    0,
    state.characterIndex
  );

  return (
    <>
      <div className="mx-auto h-1/6 w-10/12 flex flex-col justify-start items-start ">
        <div className="h-[40%]">
          <h1 className=" font-bold text-whitey uppercase mb-4 ">About</h1>
        </div>
        <div className="inline-block min-w-full min-h-[60%] ">
          <h3 className="font-bold text-5xl mb-8  text-whitey font-display">
            {displayedBuzzword}
          </h3>
        </div>
        <div>
          <p className="leading-relaxed text-whitey">
            I'm Khaled Alzahrani, A highly motivated student who is looking for
            an internship opportunity in the cloud and computer engineering
            field to improve his social and engineering skills and fulfill his
            ambitions.
          </p>
        </div>
      </div>
    </>
  );
}

export default Info;
