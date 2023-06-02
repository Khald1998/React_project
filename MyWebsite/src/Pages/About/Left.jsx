import React, { useState } from "react";
import "../../index.css";

function Left() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div
        className="w-full bg-inherit flex justify-center items-center h-[50dvh] 
      xs:h-[60dvh]  
      sm:h-[70dvh]  
      md:h-[70dvh] md:col-span-5
      lg:h-[70dvh] lg:col-span-5
      xl:h-[100dvh] xl:col-span-6"
      >
        <div
          className="aspect-square flex justify-center items-center relative
          xxs:w-8/12
          xs:w-7/12
          sm:w-7/12
          md:w-9/12
          lg:w-9/12
          xl:w-7/12
          "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={` h-[85%] w-[85%] bg-tertiary  bg-cover rounded absolute transition-all duration-300 ${
              hover ? "top-[3%] right-[3%] opacity-0" : "top-[5%] right-[5%] opacity-20 max-md:opacity-0"
            } z-30`}
          ></div>
          <div
            className={` h-[85%] w-[85%] bg-img-me bg-cover rounded absolute transition-all duration-300 ${
              hover ? "top-[3%] right-[3%] " : "top-[5%] right-[5%]"
            } z-20`}
          ></div>
          <div
            className={`h-[85%] w-[85%] border-4 border-tertiary absolute rounded transition-all duration-300 ${
              hover ? "bottom-[3%] left-[3%]" : "bottom-[5%] left-[5%]"
            } z-10`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Left;
