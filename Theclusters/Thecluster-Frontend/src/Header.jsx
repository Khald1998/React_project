import './Style/Header.css';
function Header() {

  return (

    <nav className="navbar navbar-expand bg-light px-5 py-3">
      <p className="navbar-brand my-auto">The cluster of the clusters</p>  
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link " href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link " href="/Compose">Compose A Request</a></li>
        <li className="nav-item"><a className="nav-link " href="/Request">All The Request</a></li>
        <li className="nav-item"><a className="nav-link " href="/AboutUs">About Us</a></li>
        <li className="nav-item"><a className="nav-link " href="/ContactUs">Contact Me</a></li>
      </ul>
    </nav>


  )
}

export default Header
