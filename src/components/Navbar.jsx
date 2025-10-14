import { Link } from "react-router-dom";
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
      <li><Link className="active" to="/">Home</Link></li>
      <li><Link to="/buscar-bandas">Buscar Bandas</Link></li>
    </ul>
  </nav>

  <a className="cta" href="#">
    <button>Contacto</button>
  </a>
</header>

    )
}