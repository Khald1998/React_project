import HeaderCSS from "../Style/Header.module.css"
import Link from "./Link.jsx";
import { useEffect, useState } from "react";

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
    <section className="">
      <nav className={ `${HeaderCSS.nav_blur} ${HeaderCSS.nav_bg} ${isTop ? "" : HeaderCSS.nav_bg_color} navbar navbar-expand fixed-top`}>
        <div className="container-fluid">
          <a className={HeaderCSS.text_nav + " navbar-brand"} href="#">
            Brand
          </a>
          <ul className="navbar-nav ms-auto">
          <Link link="link1"/>
          <Link link="link2"/>
          <Link link="link3"/>
          </ul>
        </div>
      </nav>
      </section>
    </>
  );
}

export default App;
