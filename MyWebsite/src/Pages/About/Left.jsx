import React, { useState } from "react";
import "../../index.css";

function Left() {
  const [hover, setHover] = useState(false);
  return (
    <>
    {/* <div className="h-[100lvh] w-full col-span-6 bg-img-background bg-[length:1000px_1000px] bg-no-repeat top-0 left-0 z-50"></div> */}
      <div
        className="w-full bg-inherit flex justify-center items-center h-[50lvh] 
      xs:h-[60lvh]  
      sm:h-[70lvh]  
      md:h-[70lvh] md:col-span-5
      lg:h-[70lvh] lg:col-span-5
      xl:h-[100lvh] xl:col-span-6
      
      "
      >
        <div className="xl:w-[45%] md:w-[40%] xs:w-[75%] max-xs:w-[90%]  aspect-square bg-img-background bg-contain bg-no-repeat absolute z-10"></div>
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
