import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import './ConfirmedBooking.css'

function ConfirmedBooking () {
    return (
        <>
        <Nav></Nav>
        <main>
        <section id="booking-confirmation" className="grid">
            <div id="confirmation-text">
            <h1>Your Reservation is Confirmed!</h1>
            <p>A confirmation message has been sent to your email.</p>
            <p>Thanks for dining with us!</p>
            </div>
        </section>
        </main>
        <Footer></Footer>
        </>
    )
}

export default ConfirmedBooking