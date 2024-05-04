import Logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little-Lemon-Logo" />
      <nav>
        <ul className="doormat-nav">
          <h6>Navigation</h6>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
        <ul className="contact">
          <h6>Contact</h6>
          <li>
            Address
          </li>
          <li>
           Phone number
          </li>
          <li>
            email
          </li>
        </ul>
        <ul className="social-media-links">
          <h6>Social Media</h6>
          <li>
            Instagram
          </li>
          <li>
           Facebook
          </li>
          <li>
            Twitter
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
