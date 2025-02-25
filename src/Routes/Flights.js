import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flightData from "./FlightData";

const Flights = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate=useNavigate();

  const locations = [
    "New Delhi",
    "Agra",
    "Aligarh",
    "Kanpur",
    "Lucknow",
    "Prayagraj",
    "Jhansi",
    "Bhopal",
    "Patna",
    "Nagpur",
  ];
  const handleBooking = (flightName, Class, price) => {
    navigate('/booking', {state: {name:flightName, type:Class, price:price, flag:"Flight"}})
  };

  const filteredFlights = flightData.filter(
    (flight) => flight.from === from && flight.to === to
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Flights</h2>
      <div className="mb-4">
        <label className="mr-2">From:</label>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-2"
        >
          <option value="">Select</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="mr-2">To:</label>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-2"
        >
          <option value="">Select</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <h3 className="text-lg font-semibold mb-2">Available Flights:</h3>
      {filteredFlights.length > 0 ? (
        <ul>
          {filteredFlights.map((flight) => (
            <li key={flight.FlightNumber} className="border p-2 mb-2">
              <h4>
                <strong>{flight.FlightName}</strong> by {flight.airline}
              </h4>
              <p>Flight Number: {flight.FlightNumber}</p>
              <p>Departure: {flight.departureTime}</p>
              <p>Arrival: {flight.arrivalTime}</p>
              <p>Duration: {flight.duration} hours</p>
              <p></p>
              <p></p>
              <p><strong>Price:</strong></p>
                <ul>
                  <li>
                  Business Class: ₹{flight.price.business}
                    <button className="book-button" onClick={() => handleBooking(flight.FlightNumber, "Business", flight.price.business)}>
                      Book Economy
                     </button>
                  </li>
                  <li>
                  Economy Class: ₹{flight.price.economy}
                    <button className="book-button" onClick={() => handleBooking(flight.FlightNumber, "Economy", flight.price.economy)}>
                      Book Business
                     </button>
                  </li>
                </ul>
              <p>In-Flight Meals: {flight.inFlightMeal.join(", ")}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available for the selected route.</p>
      )}
    </div>
  );
};

export default Flights;
