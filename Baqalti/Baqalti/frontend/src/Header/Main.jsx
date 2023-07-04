import Links from "./Links";
import Brand from "./Brand";
import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

function Main() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 mx-auto border-b-2 border-prime z-50">
        <nav className="relative ">
          <div className="bg-nav relative flex items-center justify-between
          max-md:z-50 max-sm:px-4 max-sm:py-1
          xl:px-4
          ">
            <Brand />
            <div className="md:hidden"><Hamburger toggled={isOpen} toggle={setOpen} /></div>
            <div className="max-md:hidden "><Links toggled={true}/></div>
          </div>
          <div className="max-md:z-40 md:hidden"><Links toggled={isOpen}  /></div>
        </nav>
      </header>
    </>
  );
}

export default Main;
