import "./Specials.css";
import Dessert1 from "../../assets/greek salad.jpg";
import Dessert2 from "../../assets/bruchetta.jpg";
import Dessert3 from "../../assets/lemon dessert.jpg";
import DeliveryIcon from "../../assets/icons/delivery-dining.svg";

const Specials = () => {
  const Items = [
    {
      image: Dessert1,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    },
    {
      image: Dessert2,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: Dessert3,
      title: "Lemon Dessert",
      price: "$5.99",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  const specialMenuItems = Items.map((menu) => {
    const image = menu.image;
    const title = menu.title;
    const price = menu.price;
    const description = menu.description;

    return (
      <div className="special-item">
        <div className="item-image">
          <img src={image} alt="Special dessert" className="item-image" />
        </div>
        <div className="item-text">
          <div className="item-title">
            <h6>{title}</h6>
            <h6 className="item-price">{price}</h6>
          </div>
          <p>{description}</p>
          <button className="order-delivery-button">
            Order a delivery
            <img
              src={DeliveryIcon}
              alt="Delivery Icon"
              className="delivery-icon"
            />
          </button>
        </div>
      </div>
    );
  });

  return (
    <section id="specials-section" className="grid">
      <div id="specials-header">
        <h1>This week Specials!</h1>
        <button>Online Menu</button>
      </div>
      <div id="specials-items">{specialMenuItems}</div>
    </section>
  );
};

export default Specials;
