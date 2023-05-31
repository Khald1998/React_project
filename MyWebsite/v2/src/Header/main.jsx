import { useEffect, useState } from "react";
import Link from "./Links";
import Brand from "./Brand";
function App() {
  const [isTop, setIsTop] = useState(true);

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

  return (
    <>
      <section className={`w-full px-6 py-3 fixed text-whitey transition-all duration-500 z-50 ${isTop ? "" : "bg-nav backdrop-blur"} `}>
        <nav className="flex items-center justify-between">
          <Brand text="Brand"/>
          <Link />
        </nav>
      </section>
    </>
  );
}

export default App;
