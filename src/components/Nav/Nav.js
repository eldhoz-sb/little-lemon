import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <header className="grid">
      <div id="site-logo">
        <NavLink to="/">
          <img src={Logo} alt="Little-Lemon-Logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="#">About</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="#">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="#">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
