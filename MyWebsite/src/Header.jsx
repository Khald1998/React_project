import HeaderCSS from "./Style/Header.module.css"
function App() {
  return (
    <>
      <nav className={ `${HeaderCSS.nav_blur} ${HeaderCSS.nav_bg} navbar navbar-expand fixed-top`}>
        <div className="container-fluid">
          <a className={HeaderCSS.text_nav + " navbar-brand"} href="#">
            Brand
          </a>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className={HeaderCSS.text_nav +" nav-link active "} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={HeaderCSS.text_nav +" nav-link"} href="#">
                Link
              </a>
            </li>
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
