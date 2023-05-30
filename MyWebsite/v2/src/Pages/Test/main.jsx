import React, { useEffect, useState, useRef } from "react";

function Main() {
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
      <h3 className="text-whitey">{displayedBuzzword}</h3>
    </>
  );
}

export default Main;
