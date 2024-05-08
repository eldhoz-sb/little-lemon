import "./CallToAction.css";
import HeroImage from "../../assets/restauranfood.jpg";
import { NavLink } from "react-router-dom";

function CallToAction() {
  return (
    <section id="hero-section" className="grid">
      <div id="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-text">
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illionis. We focus on traditional recipes served
          with a modern twist.
        </p>
        <NavLink to="/booking">
          <button>Reserve a Table</button>
        </NavLink>
      </div>
      <div id="hero-image">
        <img src={HeroImage} alt="HeroImage" className="hero-image" />
      </div>
    </section>
  );
}

export default CallToAction;
