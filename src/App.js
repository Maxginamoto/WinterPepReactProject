// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import "react-datepicker/dist/react-datepicker.css";
// import Trains from './Routes/Trains';
import Flights from './Routes/Flights';
import Hotels from './Routes/Hotels';
import Train from './Routes/Train';
import Booking from './Routes/Booking';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trains" element={<Train />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
