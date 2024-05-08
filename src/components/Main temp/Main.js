import './Main.css';
import HeroImage  from '../../assets/restauranfood.jpg'
import Card from '../Card/Card';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About'

function Main() {
    return (
      <main>
        <section id='hero-section' className='grid'>
        <div id="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='lead-text'>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
        </div>
        <div id='hero-image'>
        <img src={HeroImage} alt='HeroImage' className='hero-image'/>
        </div>
        </section>
        <section id='specials-section' className='grid'>
          <div id='specials-header'>
            <h1>This week Specials!</h1>
            <button>Online Menu</button>
          </div>
            <Card />
        </section>
        <Testimonials />
        <About />
      </main>
    );
  }

  export default Main;
