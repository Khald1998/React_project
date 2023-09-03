import { useEffect, useState } from "react";
import Link from "./Links";
import Brand from "./Brand";
import { Divide as Hamburger } from "hamburger-react";

function App() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  }, []);

  return (
    <>
      <section className={` transition-all duration-200  
      ${isTop ? "" : "md:mt-5"} 
      md:flex md:justify-center
      `} >
        <div
          className={`
          fixed text-whitey transition-all duration-500 z-50 w-full
          ${isOpen ? "h-[200px]" : "h-[65px]"} ${isTop ? "" : "bg-nav backdrop-blur md:rounded-3xl"}
              
          md:flex md:items-center md:w-10/12   
          `}
        >
          <nav className="max-md:py-2 max-md:px-6 md:w-full md:px-6 xl:px-16">
            <div className="flex items-center justify-between ">
              <Brand />
              <div className="max-md:hidden">
                <Link ScreenMode="big" />
              </div>
              <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            </div>
            <div
              className={`absolute transition-all duration-500 w-full md:hidden ${
                isOpen ? "top-[60px]" : "top-[-300px]"
              }`}
            >
              <Link ScreenMode="small" />
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default App;
