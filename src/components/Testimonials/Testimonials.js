import "./Testimonials.css";
import Profile1 from "../../assets/profiles/profile1.jpg";
import Profile2 from "../../assets/profiles/profile2.jpg";
import Profile3 from "../../assets/profiles/profile3.jpg";

const Testimonials = () => {
  const Items = [
    {
      image: Profile1,
      name: "Tim Cook",
      description: "Authentic flavors and a friendly staff. A must-visit!",
    },
    {
      image: Profile2,
      name: "Christina Wales",
      description: "Hidden gem with fantastic Mediterranean dishes!",
    },
    {
      image: Profile3,
      name: "Melissa Hughes",
      description: "Perfect for events. Delicious food and great service.",
    },
  ];

  const specialMenuItems = Items.map((menu) => {
    const image = menu.image;
    const name = menu.name;
    const description = menu.description;

    return (
      <div className="testimonials-item">
        <div className="tetsimonial-header">
          <div className="testimonial-image">
            <img
              src={image}
              alt="profileimage"
              className="testimonial-profile-image"
            />
          </div>
          <div className="testimonial-name">
            <h6>{name}</h6>
          </div>
        </div>
        <div className="testimonial-desc">{description}</div>
      </div>
    );
  });

  return (
    <section id='testimonials' className='grid'>
      <h1>Testimonials</h1>
      <div id="testimonials-items">{specialMenuItems}</div>
    </section>
  );
};

export default Testimonials;
