import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import trainsData from "../Data/TrainData";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./Trains.css";

const Trains = () => {
  const navigate =useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [sourceStation, setSourceStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");

  const uniqueStations = [
    "New Delhi",
    "Agra Cantt",
    "Aligarh Junction",
    "Kanpur Central",
    "Lucknow Charbagh",
    "Prayagraj Junction",
    "Jhansi Junction",
    "Bhopal Junction",
    "Patna Junction",
    "Nagpur Junction"
    ];

    const handleBooking = (trainName, Type, price) => {
      navigate('/booking', {state: {name:trainName, type:Type, price:price, flag:"Train"}})
    };

  const getDayName = date => {
    if (!date) return null;
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  };

  const selectedDay = getDayName(selectedDate);

  const filteredTrains = trainsData.filter(train => {
    const stations = Object.values(train.stations);
    return (
      selectedDay && train.days.includes(selectedDay) && stations.includes(sourceStation) && stations.includes(destinationStation)
    );
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Search Trains</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">

        <div className="mb-4">
          <label className="block font-medium">Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            className="border rounded px-3 py-2 w-full"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            placeholderText="Pick a date"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Source Station:</label>
          <select
            value={sourceStation}
            onChange={e => setSourceStation(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Select Source</option>
            {uniqueStations.map(station => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Destination Station:</label>
          <select
            value={destinationStation}
            onChange={e => setDestinationStation(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Select Destination</option>
            {uniqueStations.map(station => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Available Trains</h2>

        {filteredTrains.length > 0 ? (
          filteredTrains.map(train => {

            const sourceKey = Object.keys(train.stations).find(
              key => train.stations[key] === sourceStation
            );
            const destinationKey = Object.keys(train.stations).find(
              key => train.stations[key] === destinationStation
            );


            if (!sourceKey || !destinationKey || sourceKey >= destinationKey) {
              return null; 
            }

            return (
              <div key={train.trainNumber} className="bg-white p-4 shadow-md rounded-lg mb-4">
                <h3 className="text-lg font-semibold">{train.trainName} ({train.trainNumber})</h3>
                <p><strong>Days:</strong> {train.days.join(", ")}</p>
                <p><strong>Route:</strong> {Object.values(train.stations).join(" → ")}</p>
                <p><strong>Departure:</strong> {train.arivalTime[sourceKey]}</p>
                <p><strong>Arrival:</strong> {train.arivalTime[destinationKey]}</p>
                <p><strong>Dinner:</strong> {train.dinnerAvailability ? "Yes" : "No"}</p>
                <p><strong>Price:</strong></p>
                <ul>
                  <li>
                    AC1 - ₹{train.price.ac1}
                    <button className="book-button" onClick={() => handleBooking(train.trainName, "AC1", train.price.ac1)}>
                      Book AC1
                     </button>
                  </li>
                  <li>
                    AC2 - ₹{train.price.ac2}
                    <button className="book-button" onClick={() => handleBooking(train.trainName, "AC2", train.price.ac2)}>
                      Book AC2
                     </button>
                  </li>
                  <li>
                    AC3 - ₹{train.price.ac3}
                    <button className="book-button" onClick={() => handleBooking(train.trainName, "AC3", train.price.ac3)}>
                      Book AC3
                    </button>
                  </li>
                  <li>
                    Non-AC - ₹{train.price.non_ac}
                    <button className="book-button" onClick={() => handleBooking(train.trainName, "Non AC", train.price.non_ac)}>
                      Book Non AC
                    </button>
                  </li>
                </ul>
                {/* <button className="book-button" onClick={() => handleBooking(train.trainName, roomType, details.price)}>
                   Book {train}
                </button> */}
              </div>
            );
          })
        ) : (
          <p className="text-red-500 mt-4">No trains found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Trains;
