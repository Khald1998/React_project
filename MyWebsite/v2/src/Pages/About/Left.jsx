import React, { useState } from "react";

function Left() {
  const [hover, setHover] = useState(false);
  return (
    <>
      {/* <div className="bg-img-me bg-no-repeat bg-contain w-full 
      max-xxs:h-[65vh] max-xxs:bg-contain max-xxs:bg-top
      xxs:h-[75vh] xxs:bg-cover xxs:bg-top
      xs:h-[95vh] xs:bg-cover xs:bg-top 
      sm:h-[100vh] sm:bg-cover sm:bg-top 
      md:h-[70vh] md:bg-cover md:bg-top md:col-span-5
      lg:h-[70vh] lg:bg-cover lg:bg-top lg:col-span-5
      xl:h-screen xl:bg-cover xl:bg-top xl:col-span-6"> 
      </div> */}
      <div
        className="w-full bg-inherit flex justify-center items-center
      max-xxs:h-[50vh] 
      xxs:h-[50vh] 
      xs:h-[60vh]  
      sm:h-[70vh]  
      md:h-[70vh] md:col-span-5
      lg:h-[70vh] lg:col-span-5
      xl:h-screen xl:col-span-6"
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
            className={`h-[85%] w-[85%] bg-img-me bg-cover rounded absolute transition-all duration-300 ${
              hover ? "top-[3%] right-[3%]" : "top-[5%] right-[5%]"
            } z-20`}
          ></div>
          <div
            className={`h-[85%] w-[85%] border-4 border-whitey-500 absolute rounded transition-all duration-300 ${
              hover ? "bottom-[3%] left-[3%]" : "bottom-[5%] left-[5%]"
            } z-10`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Left;
