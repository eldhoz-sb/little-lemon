import Logo from '../../assets/Logo.svg'
import './Footer.css';

function Footer() {
  return (
    <footer className="grid">
      <img src={Logo} alt="Little-Lemon-Logo" />
      <nav>
        <h6>Navigation</h6>
        <ul className="doormat-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="/booking">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
      <nav>
        <h6>Contact</h6>
        <ul className="contact">
          <li>Address</li>
          <li>Phone number</li>
          <li>email</li>
        </ul>
      </nav>
      <nav>
        <h6>Social Media</h6>
        <ul className="social-media-links">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
