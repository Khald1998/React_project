import "./Style/Header.css";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container-fluid">
          <a className="navbar-brand d-none d-sm-block" href="#">
            The Cluster of the Clusters
          </a>
          <a className="navbar-brand d-block d-sm-none" href="#">
            TCoC
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Compose">
                  Compose a Request
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Requests">
                  All Requests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ContactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
