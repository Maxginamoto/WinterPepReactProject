import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import hotelData from '../Data/HotelData.js';
import "./Hotel.css"

const Hotels = () => {
    const navigate = useNavigate();
    const [selectedLocation, setSelectedLocation] = useState('All');
  const locations = [
      "All",
      "New Delhi",
      "Agra",
      "Aligarh",
      "Kanpur",
      "Lucknow",
      "Prayagraj",
      "Jhansi",
      "Bhopal",
      "Patna",
      "Nagpur"
    ];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredHotels = selectedLocation === 'All'
    ? hotelData
    : hotelData.filter(hotel => hotel.location === selectedLocation);

  const handleBooking = (hotelName, roomType, price) => {
    navigate('/booking', {state: {name:hotelName, type:roomType, price:price, flag:"Hotel"}})
  };
  return (
    <div>
      <h2>Hotels</h2>

      <label htmlFor="location-select">Select Location:</label>
      <select className="border rounded px-3 py-2 w-full" id="location-select" value={selectedLocation} onChange={handleLocationChange}>
        {locations.map(location => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <div className="hotel-list">
        {filteredHotels.map(hotel => (
          <div key={hotel.name} className="hotel-card">
            <h3>{hotel.name}</h3>
            <p>Location: {hotel.location}</p>
            <p>Star Rating: {hotel.starRating}</p>
            <p>Available Rooms: {hotel.availableRooms}</p>
            <h4>Room Types:</h4>
            <ul>
              {Object.entries(hotel.roomTypes).map(([roomType, details]) => (
                <li key={roomType}>
                  {roomType}: Occupants - {details.occupants}, Price - {details.price}
                  <button className="book-button" onClick={() => handleBooking(hotel.name, roomType, details.price)}>
                    Book {roomType}
                  </button>
                </li>
              ))}
            </ul>
            <h4>Amenities:</h4>
            <ul>
              {hotel.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        ))}
        {filteredHotels.length === 0 && <p>No hotels found for this location.</p>}
      </div>
    </div>
  );
};

export default Hotels;