import { useEffect, useState } from "react";
import Link from "./Links";
import Brand from "./Brand";
import Closed from "../assets/BM-closed.svg";
import Opned from "../assets/BM-opned.svg";

function App() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section
        className={`w-full px-6 py-3 fixed text-whitey transition-all duration-500 z-50 ${
          isTop ? "" : "bg-nav backdrop-blur"
        } `}
      >
        <nav className="flex items-center justify-between">
          <Brand />
          <div className="max-md:hidden">
            <Link mode='max'/>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
            <img className="w-auto h-8 " src={!isOpen?Closed:Opned} alt="Your SVG" />
          </div>
          
        </nav>
        <div className={`h-20 w-full md:hidden ${isOpen?"block transition-all duration-500":"hidden"}`}>
        <Link mode='min'/>
        </div>
      </section>
    </>
  );
}

export default App;
