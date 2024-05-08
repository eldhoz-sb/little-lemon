import "./BookingPage.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import BookingForm from "../BookingForm/BookingForm";
import { useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "../../BookingApi";
import { useNavigate } from "react-router-dom";

function availableTimesReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_TIMES":
    case "UPDATE_TIMES":
      return action.times;
    default:
      return state;
  }
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const navigate = useNavigate();

  function initializeTimes() {
    const today = new Date();
    const initialTimes = fetchAPI(today);
    dispatch({ type: "INITIALIZE_TIMES", times: initialTimes });
  }

  function updateTimes(selectedDate) {
    const updatedTimes = fetchAPI(selectedDate);
    dispatch({ type: "UPDATE_TIMES", times: updatedTimes });
  }

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/booking-confirmation")
    }
  }


  useEffect(() => {
    initializeTimes();
  }, []);


  return (
    <>
      <Nav />
      <main>
        <section id="booking-section" className="grid">
          <h1>Reserve A Table</h1>
          <BookingForm
            availableTimes={availableTimes}
            updateTimes={updateTimes}
            submitForm={submitForm}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
