import Links from "./Links";
import Brand from "./Brand";
import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

function Main() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 mx-auto z-50">
        <nav className="relative ">
          <div className="relative bg-nav flex items-center justify-between z-50
          max-sm:px-4 max-sm:py-1 

          sm:px-4 sm:py-0

          md:px-4 md:py-1

          big:px-4 big:py-1
          
          lg:px-6 lg:py-1

          xl:px-8 xl:py-1 
          ">
            <Brand />
            <div className="big:hidden "><Hamburger toggled={isOpen} toggle={setOpen} size={30} /></div>
            <div className="max-big:hidden"><Links toggled={true}/></div>
          </div>
          <div className="big:hidden"><Links toggled={isOpen}  /></div>
        </nav>
      </header>
    </>
  );
}

export default Main;
