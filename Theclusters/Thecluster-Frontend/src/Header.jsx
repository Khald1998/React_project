import './Header.css';
function Header() {

  return (

    <nav className="navbar navbar-expand bg-light px-5 py-3">
      <p className="navbar-brand my-auto">The cluster of the clusters</p>  
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link " href="/">HOME</a></li>
        <li className="nav-item"><a className="nav-link " href="/compose">COMPOSE</a></li>
        <li className="nav-item"><a className="nav-link " href="/about">ABOUT US</a></li>
        <li className="nav-item"><a className="nav-link " href="/contact">CONTACT US</a></li>
      </ul>
    </nav>


  )
}

export default Header