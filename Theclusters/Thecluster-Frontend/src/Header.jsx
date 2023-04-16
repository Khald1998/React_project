// import "./Style/Header.css";
function Header() {
  return (
    <>
      <div className="d-none d-sm-block">
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

      <div className=" d-block d-sm-none ">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              The cluster of the clusters
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
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
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
