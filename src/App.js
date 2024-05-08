import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage"
import BookingPage from './components/BookingPage/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/booking' element={<BookingPage />}></Route>
      <Route path='/booking-confirmation' element={<ConfirmedBooking />}></Route>
    </Routes>
    </>
  );
}

export default App;
