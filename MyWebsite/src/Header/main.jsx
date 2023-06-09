import { useEffect, useState } from "react";
import Link from "./Links";
import Brand from "./Brand";
import Closed from "../assets/BM-closed.svg";
import Opned from "../assets/BM-opned.svg";
import { Divide as Hamburger } from "hamburger-react";

function App() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  }, []);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <section
        className={`${isOpen?'h-[200px]':'h-[65px]'} w-full px-6 py-3 fixed text-whitey transition-all duration-500 z-50 ${
          isTop ? "" : "bg-nav backdrop-blur"
        } `}
      >
        <nav className="flex items-center justify-between">
          <Brand />
          <div className="max-md:hidden">
            <Link ScreenMode="big" />
          </div>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </nav>
        <div
          className={`absolute transition-all duration-500 w-full md:hidden ${
            isOpen ? "top-[60px]" : "top-[-300px]"
          }`}
        >
          <Link ScreenMode="small" />
        </div>
      </section>
    </>
  );
}

export default App;
