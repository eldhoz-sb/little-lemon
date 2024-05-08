import './HomePage.css';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import CallToAction from '../CallToAction/CallToAction';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials'
import About from '../About/About'

function HomePage() {
  return (
    <>
    <Nav />
    <main>
        <CallToAction />
        <Specials />
        <Testimonials />
        <About />
      </main>
    <Footer />
    </>
  );
}

export default HomePage;
