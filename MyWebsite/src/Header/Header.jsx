import HeaderCSS from "../Style/Header.module.css"
import Link from "./Link.jsx";
function App() {
  return (
    <>
      <nav className={ `${HeaderCSS.nav_blur} ${HeaderCSS.nav_bg} navbar navbar-expand fixed-top`}>
        <div className="container-fluid">
          <a className={HeaderCSS.text_nav + " navbar-brand"} href="#">
            Brand
          </a>
          <ul className="navbar-nav me-auto">
          <Link link="link1"/>
          <Link link="link2"/>
          <Link link="link3"/>
          </ul>
        </div>
      </nav>
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
