import { NavLink } from "react-router-dom";
import logo from "../assets/homeIMG/logo.png";
import "../styles/navbar.css"

export default function Navbar() {
    return (
<header className="navbar">
  <div className="logo-container">
    <img src={logo} alt="Logo" className="logo" />
    <h2>JamTogether</h2>
  </div>

  <nav className="nav-center">
    <ul className="nav-links">
      <li>
        <NavLink to ="/"
         className = {({ isActive }) => (isActive ? "active" : "")}> Home </NavLink></li>
      <li>
  <NavLink 
    to="/buscar-bandas"
    className={({ isActive }) => (isActive ? "active" : "")}
    onClick={() => window.scrollTo(0, 0)}>
    Explorar Bandas
  </NavLink>
</li>
    </ul>
  </nav>

  <a className="cta" href="#">
    <button>Contacto</button>
  </a>
</header>

    )
}