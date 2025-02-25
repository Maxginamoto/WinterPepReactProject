// HotelData.js
const hotelData = [
    {
      name: "The Grand Plaza",
      location: "New Delhi",
      starRating: 5,
      availableRooms: 20,
      roomTypes: {
        single: {  occupants: 1, price: 5000 },
        double: {  occupants: 2, price: 7000 },
        suite: {  occupants: 4, price: 12000 },
      },
      amenities: ["pool", "gym", "spa"],
    },
    {
      name: "Hotel Royal Bengal",
      location: "New Delhi",
      starRating: 4,
      availableRooms: 15,
      roomTypes: {
        deluxe: {  occupants: 2, price: 6000 },
        family: { occupants: 4, price: 10000 },
      },
      amenities: ["restaurant", "bar"],

    },
      {
      name: "Taj Mahal View",
      location: "Agra",
      starRating: 5,
      availableRooms: 18,
      roomTypes: {
        standard: {  occupants: 2, price: 4500 },
        suite: {  occupants: 4, price: 11000 },
        king: {  occupants: 2, price: 8000 },
      },
      amenities: ["pool", "restaurant", "free wifi"],
    },
    {
      name: "ITC Mughal",
      location: "Agra",
      starRating: 4,
      availableRooms: 22,
      roomTypes: {
        deluxe: {  occupants: 2, price: 5500 },
        family: {  occupants: 4, price: 9500 },
      },
      amenities: ["spa", "gym"],
    },
    {
      name: "Aligarh Grand",
      location: "Aligarh",
      starRating: 3,
      availableRooms: 12,
      roomTypes: {
        single: {  occupants: 1, price: 3000 },
        double: {  occupants: 2, price: 4000 },
      },
      amenities: ["restaurant"],
    },
    {
      name: "Hotel Classic Aligarh",
      location: "Aligarh",
      starRating: 2,
      availableRooms: 15,
      roomTypes: {
        standard: { occupants: 2, price: 3500 },
        deluxe: { occupants: 2, price: 5000 },
      },
      amenities: ["free wifi"],
    },
      {
      name: "Kanpur River View",
      location: "Kanpur",
      starRating: 4,
      availableRooms: 18,
      roomTypes: {
        deluxe: {  occupants: 2, price: 4500 },
        suite: {  occupants: 4, price: 9000 },
      },
      amenities: ["pool", "restaurant", "bar"],
   },
    {
      name: "Hotel President Kanpur",
      location: "Kanpur",
      starRating: 3,
      availableRooms: 20,
      roomTypes: {
        standard: {  occupants: 2, price: 3500 },
        family: { occupants: 4, price: 7500 },
      },
      amenities: ["restaurant", "free wifi"],
    },
      {
      name: "Lucknow Regency",
      location: "Lucknow",
      starRating: 5,
      availableRooms: 15,
      roomTypes: {
        single: { occupants: 1, price: 5000 },
        double: { occupants: 2, price: 6500 },
        suite: { occupants: 4, price: 11000 },
      },
      amenities: ["pool", "gym", "spa", "restaurant"],
    },
    {
      name: "The Heritage Lucknow",
      location: "Lucknow",
      starRating: 4,
      availableRooms: 22,
      roomTypes: {
        deluxe: {  occupants: 2, price: 5500 },
        family: {  occupants: 4, price: 10000 },
      },
      amenities: ["restaurant", "bar", "free wifi"],
    },
      {
      name: "Prayagraj Inn",
      location: "Prayagraj",
      starRating: 3,
      availableRooms: 25,
      roomTypes: {
        standard: {  occupants: 2, price: 3500 },
        deluxe: {  occupants: 2, price: 5000 },
      },
      amenities: ["restaurant", "free wifi"],
    },
    {
      name: "Hotel Sangam Prayagraj",
      location: "Prayagraj",
      starRating: 2,
      availableRooms: 20,
      roomTypes: {
        single: { occupants: 1, price: 2500 },
        double: {  occupants: 2, price: 4000 },
      },
      amenities: ["free wifi"],
    },
      {
      name: "Jhansi Fort View",
      location: "Jhansi",
      starRating: 4,
      availableRooms: 15,
      roomTypes: {
        deluxe: {  occupants: 2, price: 4000 },
        suite: {  occupants: 4, price: 8500 },
      },
      amenities: ["pool", "restaurant"],
    },
    {
      name: "Jhansi Regency",
      location: "Jhansi",
      starRating: 4,
      availableRooms: 20,
      roomTypes: {
        Single: { occupants: 1, price: 2000 },
        Double: { occupants: 2, price: 3500},
        Suite: { occupants: 4, price: 7000 }
      },
      amenities: ["Pool", "Restaurant", "Gym", "Free Wifi"]
    },
    {
      name: "Jhansi Grand Hotel",
      location: "Jhansi",
      starRating: 3,
      availableRooms: 15,
      roomTypes: {
        Single: { occupants: 1, price: 1500 },
        Double: { occupants: 2, price: 2500},
        Family: { occupants: 3, price: 4000}
      },
      amenities: ["Restaurant", "Banquet Hall", "Free Wifi"]
    },
    {
      name: "Bhopal Lake View",
      location: "Bhopal",
      starRating: 5,
      availableRooms: 25,
      roomTypes: {
        Deluxe: { occupants: 2, price: 4000},
        Suite: { occupants: 4, price: 9000 },
        "Presidential Suite": { occupants: 2, price: 12000 } 
      },
      amenities: ["Pool", "Spa", "Multiple Restaurants", "Free Wifi", "Lake View"]
    },
    {
      name: "Bhopal Royal Stay",
      location: "Bhopal",
      starRating: 4,
      availableRooms: 18,
      roomTypes: {
        Standard: { occupants: 2, price: 2800},
        Executive: { occupants: 2, price: 3800},
        Family: { occupants: 4, price: 6000 }
      },
      amenities: ["Restaurant", "Conference Rooms", "Free Wifi"]
    },
    {
      name: "Patna Premier Inn",
      location: "Patna",
      starRating: 3,
      availableRooms: 22,
      roomTypes: {
        Single: { occupants: 1, price: 1200},
        Double: { occupants: 2, price: 2200 },
        Deluxe: { occupants: 2, price: 3500}
      },
      amenities: ["Restaurant", "Free Wifi", "24-hour Front Desk"]
    },
    {
      name: "Patna Heritage Hotel",
      location: "Patna",
      starRating: 4,
      availableRooms: 15,
      roomTypes: {
        Classic: { occupants: 2, price: 2500 },
        Superior: { occupants: 2, price: 3500},
        Suite: { occupants: 4, price: 6000}
      },
      amenities: ["Restaurant", "Bar", "Free Wifi", "Historical Building"]
    },
    {
      name: "Nagpur City Center Hotel",
      location: "Nagpur",
      starRating: 4,
      availableRooms: 20,
      roomTypes: {
        Standard: { occupants: 2, price: 3000 },
        Deluxe: { occupants: 2, price: 4000 },
        Family: { occupants: 4, price: 7000 }
      },
      amenities: ["Pool", "Restaurant", "Free Wifi", "City View"]
    },
    {
      name: "Nagpur Orange Tree Resort",
      location: "Nagpur",
      starRating: 5,
      availableRooms: 16,
      roomTypes: {
        Cottage: { occupants: 2, price: 4500},
        Villa: { occupants: 4, price: 9000 },
        "Luxury Suite": { occupants: 2, price: 11000 }
      },
      amenities: ["Pool", "Spa", "Multiple Restaurants", "Free Wifi", "Resort Activities"]
    }
  ];
  
  export default hotelData;