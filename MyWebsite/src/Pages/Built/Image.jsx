import React, { useState, useEffect } from "react";
import projects from "./projects.js";

function Image() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const project = projects[currentProjectIndex];
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity("opacity-0");
      setTimeout(() => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setOpacity("opacity-100");
      }, 600);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute flex justify-center items-center max-md:hidden md:w-3/4 md:h-5/6 md:justify-start lg:justify-start lg:h-3/4 xl:h-5/6">
        <div className="rounded-md md:aspect-[16/10] md:w-9/12 lg:w-[75%] lg:aspect-[16/10] xl:w-[80%] xl:aspect-[16/10] relative">
          <div className="absolute w-full h-full top-0 left-0 ">
            <img
              className={`absolute rounded-md transition-all duration-300 ease-in-out ${opacity} object-cover w-full h-full`}
              src={`/${project.img}.png`}
            />
          </div>
          <div className="absolute img-shadow-smoth w-full h-full rounded-md top-0 left-0"></div>
        </div>
      </div>
    </>
  );
}

export default Image;
