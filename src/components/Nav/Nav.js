import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { ReactComponent as HamburgerMenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import "./Nav.css";
import { useEffect, useState } from "react";

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="grid">
      <div id="site-logo">
        <NavLink to="/">
          <img src={Logo} alt="Little-Lemon-Logo" />
        </NavLink>
      </div>
      {isMobile ? (
        <nav className="mobile-nav">
          <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <HamburgerMenuIcon className="menu-icon" />
          </div>
          <ul className={`flyout-menu ${isOpen ? "open active" : ""}`}>
            <CloseIcon className="close-icon" onClick={toggleMenu} />
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
      ) : (
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
      )}
    </header>
  );
}

export default Nav;
