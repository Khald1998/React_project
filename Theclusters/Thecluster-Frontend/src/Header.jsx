import "./Style/Header.css";
function Header() {
  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand bg-light py-3 ">
          <p className="navbar-brand my-auto ms-lg-5 mx-auto ">
            The cluster of the clusters
          </p>
          <div className="d-none d-sm-block">
            <ul className="navbar-nav ms-auto me-lg-5 mx-auto ">
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/Compose">
                  Compose A Request
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/Request">
                  All The Request
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/AboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/ContactUs">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="d-block d-sm-none">

      </div>
    </>
  );
}

export default Header;
