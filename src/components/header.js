import Logo from '../assets/Logo.svg'

function Header() {
    return (
      <header>
        <img src={Logo} alt='Little-Lemon-Logo' />
        <nav>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
            </ul>
        </nav>
      </header>
    );
  }

  export default Header;
