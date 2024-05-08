import "./About.css";
import About1 from "../../assets/Mario and Adrian.jpg";
import About2 from "../../assets/restaurant chef.jpg";

function About() {
  return (
    <section id="About" className="grid">
      <div id="about-text">
        <div id="about-text-header">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant. To craft the menu, Mario relies on family recipes and his
          experience as a chef in Italy. Adrian does all the marketing for the
          restaurant and led the effort to expand the menu beyond classic
          Italian to incorporate additional cuisines from the Mediterranean
          region.
        </p>
      </div>
      <div id="about-images">
        <img src={About1} alt="about1" className="about-image-1" />
        <img src={About2} alt="about2" className="about-image-2" />
      </div>
    </section>
  );
}

export default About;
