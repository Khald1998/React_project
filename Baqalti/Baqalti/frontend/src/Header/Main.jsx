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
           
          xl:px-8 xl:py-2
          ">
            <Brand />
            <div className="sm:hidden"><Hamburger toggled={isOpen} toggle={setOpen} /></div>
            <div className="max-sm:hidden "><Links toggled={true}/></div>
          </div>
          <div className="sm:hidden"><Links toggled={isOpen}  /></div>
        </nav>
      </header>
    </>
  );
}

export default Main;
