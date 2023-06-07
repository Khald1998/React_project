import { FiGithub, FiExternalLink } from "react-icons/fi";
import React, { useState, useEffect } from 'react';
import projects from './projects.js';

function Description() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const project = projects[currentProjectIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" text-whitey flex justify-center items-center xxs:h-[88%] xxs:w-full sm:w-full md:justify-end lg:h-3/4 xl:h-5/6">
        <div className="rounded-md flex flex-col justify-center items-center xxs:h-fit xxs:w-full xxs:p-4 sm:p-10 md:z-10 md:p-0 md:w-[82%] md:items-end md:pb-6 lg:w-[90%] lg:pb-0 xl:w-4/6 xl:h-full box-shadow-smoth">
          <div className="flex justify-start items-center text-tertiary font-dynamic xxs:w-full xxs:h-9 xxs:text-xs sm:text-sm md:justify-end md:w-[75%] lg:w-[70%] lg:text-base xl:w-[60%] xl:h-[8%]">
            <h1>Featured Project</h1>
          </div>
          <div className="flex justify-start items-center font-bold font-front xxs:w-full xxs:h-fit xxs:text-xl sm:text-2xl md:justify-end md:w-[75%] lg:w-[70%] lg:text-3xl lg:mb-2 xl:w-[60%] xl:h-[8%]">
            <a href="">{project.project_name}</a>
          </div>
          <div className="xxs:w-full xxs:h-48 xxs:py-4 xxs:text-sm xs:text-base xs:h-40 sm:h-32 sm:text-base md:rounded-md md:justify-end md:text-sm md:text-end md:w-[75%] md:p-4 md:bg-footer lg:w-[70%] lg:text-base xl:w-[75%] xl:max-h-[40%]">
            <h1>
            {project.project_description.length<=240?project.project_description:project.project_description.substring(0,240)+"..."}
            </h1>
          </div>
          <div className="font-VS italic xxs:h-16 xxs:w-full xxs:py-2 xxs:text-sm sm:h-fit md:w-[75%] lg:w-[70%] xl:w-[60%] xl:h-[8%]">
            <ul className="list-none flex flex-row justify-start flex-wrap gap-2 text-gray-400 md:justify-end lg:text-lg">
            {project.project_tags.slice(0, 7).map((tag, index) => (
                <li key={index}>
                  <p>{tag}</p>
                </li>
              ))}
              {project.project_tags.length > 7 && (
                <li key={9}>
                  <p>...</p>
                </li>
              )}
            </ul>
          </div>
          <div className="flex flex-row justify-start items-center xxs:w-full xxs:h-8 xxs:py-5 md:justify-end md:w-[75%] lg:w-[70%] xl:w-[60%] xl:h-[8%]">
            <FiGithub className="w-auto h-5 m-2 lg:h-7" />
            <FiExternalLink className="w-auto h-5 m-2 lg:h-7" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
