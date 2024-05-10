import { useState } from "react";
import "./BookingForm.css";

function BookingForm(props) {
  const today = new Date().toISOString().split('T')[0];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("No Occasion");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      date,
      time,
      guests,
      occasion,
    };
    props.submitForm(formData);
    console.log("Form Submitted Successfully");
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.updateTimes(selectedDate);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="booking-form"
        aria-label="Little Lemon Booking Form"
      >
        <div className="form-box">
          <label htmlFor="res-name">Name</label>
          <input
            type="text"
            id="res-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-box">
          <label htmlFor="res-email">Email</label>
          <input
            type="email"
            id="res-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-box">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-box">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {props.availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-box">
          <label htmlFor="guests">Number of guests</label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          >
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="form-box">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>No Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
}

export default BookingForm;
