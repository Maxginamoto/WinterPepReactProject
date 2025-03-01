const trainsData = [
  {
    trainName: "Rajdhani Express",
    trainNumber: 10101,
    days: ["Monday", "Wednesday", "Friday"],
    stations: {
      1: "Kanpur Central",
      2: "Lucknow Charbagh",
      3: "Prayagraj Junction",
      4: "Jhansi Junction",
    },
    arivalTime: {
      1: "06:00",
      2: "10:30",
      3: "14:00",
      4: "18:45",
    },
    availableSeats: {
      ac1: 10,
      ac2: 20,
      ac3: 30,
      non_ac: 50,
    },
    price: {
      ac1: 2500,
      ac2: 1800,
      ac3: 1200,
      non_ac: 600,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Shatabdi Express",
    trainNumber: 12001,
    days: ["Tuesday", "Thursday", "Saturday"],
    stations: {
      1: "New Delhi",
      2: "Agra Cantt",
      3: "Jhansi Junction",
      4: "Bhopal Junction",
    },
    arivalTime: {
      1: "07:00",
      2: "09:15",
      3: "12:30",
      4: "15:45",
    },
    availableSeats: {
      ac1: 12,
      ac2: 25,
      ac3: 35,
      non_ac: 55,
    },
    price: {
      ac1: 2200,
      ac2: 1600,
      ac3: 1000,
      non_ac: 500,
    },
    dinnerAvailability: false,
  },
  {
    trainName: "Duronto Express",
    trainNumber: 22222,
    days: ["Monday", "Thursday", "Sunday"],
    stations: {
      1: "Lucknow Charbagh",
      2: "Prayagraj Junction",
      3: "Jhansi Junction",
      4: "Bhopal Junction",
    },
    arivalTime: {
      1: "05:30",
      2: "09:00",
      3: "14:30",
      4: "20:00",
    },
    availableSeats: {
      ac1: 18,
      ac2: 28,
      ac3: 40,
      non_ac: 70,
    },
    price: {
      ac1: 2600,
      ac2: 1900,
      ac3: 1300,
      non_ac: 700,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Garib Rath Express",
    trainNumber: 12909,
    days: ["Wednesday", "Friday", "Saturday"],
    stations: {
      1: "New Delhi",
      2: "Kanpur Central",
      3: "Lucknow Charbagh",
      4: "Prayagraj Junction"
    },
    arivalTime: {
      1: "05:00",
      2: "08:30",
      3: "12:15",
      4: "16:45",
    },
    availableSeats: {
      ac1: 20,
      ac2: 35,
      ac3: 45,
      non_ac: 80,
    },
    price: {
      ac1: 2800,
      ac2: 2000,
      ac3: 1400,
      non_ac: 750,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Humsafar Express",
    trainNumber: 22448,
    days: ["Monday", "Thursday", "Sunday"],
    stations: {
      1: "Prayagraj Junction",
      2: "Jhansi Junction",
      3: "Bhopal Junction",
      4: "Nagpur Junction"
    },
    arivalTime: {
      1: "06:30",
      2: "11:45",
      3: "18:00",
      4: "22:30",
    },
    availableSeats: {
      ac1: 15,
      ac2: 25,
      ac3: 35,
      non_ac: 60,
    },
    price: {
      ac1: 3000,
      ac2: 2200,
      ac3: 1600,
      non_ac: 900,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Vande Bharat Express",
    trainNumber: 22439,
    days: ["Monday", "Wednesday", "Friday"],
    stations: {
      1: "Agra Cantt",
      2: "Aligarh Junction",
      3: "Kanpur Central",
      4: "Lucknow Charbagh"
    },
    arivalTime: {
      1: "06:00",
      2: "08:10",
      3: "12:30",
      4: "15:00"
    },
    availableSeats: {
      ac1: 18,
      ac2: 22,
      ac3: 40,
      non_ac: 75,
    },
    price: {
      ac1: 2700,
      ac2: 2100,
      ac3: 1400,
      non_ac: 800,
    },
    dinnerAvailability: false,
  },
  {
    trainName: "Tejas Express",
    trainNumber: 22656,
    days: ["Tuesday", "Thursday", "Saturday"],
    stations: {
      1: "Kanpur Central",
      2: "Prayagraj Junction",
      3: "Bhopal Junction",
      4: "Patna Junction",
    },
    arivalTime: {
      1: "07:00",
      2: "10:00",
      3: "12:30",
      4: "15:00",
    },
    availableSeats: {
      ac1: 12,
      ac2: 30,
      ac3: 40,
      non_ac: 60,
    },
    price: {
      ac1: 3200,
      ac2: 2500,
      ac3: 1700,
      non_ac: 900,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Sampark Kranti Express",
    trainNumber: 12447,
    days: ["Wednesday", "Friday", "Sunday"],
    stations: {
      1: "New Delhi",
      2: "Jhansi Junction",
      3: "Bhopal Junction",
      4: "Nagpur Junction",
    },
    arivalTime: {
      1: "05:30",
      2: "10:15",
      3: "15:30",
      4: "20:45",
    },
    availableSeats: {
      ac1: 22,
      ac2: 28,
      ac3: 50,
      non_ac: 90,
    },
    price: {
      ac1: 2900,
      ac2: 2300,
      ac3: 1600,
      non_ac: 850,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Express Falcon",
    trainNumber: 20202,
    days: ["Monday", "Wednesday", "Friday"],
    stations: {
      1: "Jhansi Junction",
      2: "Prayagraj Junction",
      3: "Lucknow Charbagh",
      4: "Kanpur Central",
    },
    arivalTime: {
      1: "06:00",
      2: "10:30",
      3: "14:00",
      4: "18:45",
    },
    availableSeats: {
      ac1: 12,
      ac2: 18,
      ac3: 28,
      non_ac: 55,
    },
    price: {
      ac1: 2600,
      ac2: 1900,
      ac3: 1300,
      non_ac: 650,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Golden Arrow",
    trainNumber: 23002,
    days: ["Tuesday", "Thursday", "Saturday"],
    stations: {
      1: "Bhopal Junction",
      2: "Jhansi Junction",
      3: "Agra Cantt",
      4: "New Delhi",
    },
    arivalTime: {
      1: "07:00",
      2: "09:15",
      3: "12:30",
      4: "15:45",
    },
    availableSeats: {
      ac1: 14,
      ac2: 22,
      ac3: 32,
      non_ac: 50,
    },
    price: {
      ac1: 2300,
      ac2: 1700,
      ac3: 1100,
      non_ac: 550,
    },
    dinnerAvailability: false,
  },
  {
    trainName: "Lightning Express",
    trainNumber: 33333,
    days: ["Monday", "Thursday", "Sunday"],
    stations: {
      1: "Bhopal Junction",
      2: "Jhansi Junction",
      3: "Prayagraj Junction",
      4: "Lucknow Charbagh",
    },
    arivalTime: {
      1: "05:30",
      2: "09:00",
      3: "14:30",
      4: "20:00",
    },
    availableSeats: {
      ac1: 16,
      ac2: 26,
      ac3: 38,
      non_ac: 65,
    },
    price: {
      ac1: 2700,
      ac2: 2000,
      ac3: 1400,
      non_ac: 750,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Silver Streak",
    trainNumber: 13909,
    days: ["Wednesday", "Friday", "Saturday"],
    stations: {
      1: "Prayagraj Junction",
      2: "Lucknow Charbagh",
      3: "Kanpur Central",
      4: "New Delhi"
    },
    arivalTime: {
      1: "05:00",
      2: "08:30",
      3: "12:15",
      4: "16:45",
    },
    availableSeats: {
      ac1: 22,
      ac2: 38,
      ac3: 48,
      non_ac: 85,
    },
    price: {
      ac1: 2900,
      ac2: 2100,
      ac3: 1500,
      non_ac: 800,
    },
    dinnerAvailability: true,
  },  
  {
    trainName: "Suhana Express",
    trainNumber: 33001,
    days: ["Monday", "Thursday", "Sunday"],
    stations: {
      1: "Nagpur Junction",
      2: "Bhopal Junction",
      3: "Jhansi Junction",
      4: "Prayagraj Junction",
    },
    arivalTime: {
      1: "06:30",
      2: "11:45",
      3: "18:00",
      4: "22:30",
    },
    availableSeats: {
      ac1: 15,
      ac2: 25,
      ac3: 35,
      non_ac: 60,
    },
    price: {
      ac1: 3000,
      ac2: 2200,
      ac3: 1600,
      non_ac: 900,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Uday Bharat Express",
    trainNumber: 33002,
    days: ["Monday", "Wednesday", "Friday"],
    stations: {
      1: "Lucknow Charbagh",
      2: "Kanpur Central",
      3: "Aligarh Junction",
      4: "Agra Cantt",
    },
    arivalTime: {
      1: "06:00",
      2: "08:10",
      3: "12:30",
      4: "15:00",
    },
    availableSeats: {
      ac1: 18,
      ac2: 22,
      ac3: 40,
      non_ac: 75,
    },
    price: {
      ac1: 2700,
      ac2: 2100,
      ac3: 1400,
      non_ac: 800,
    },
    dinnerAvailability: false,
  },
  {
    trainName: "Surya Express",
    trainNumber: 33003,
    days: ["Tuesday", "Thursday", "Saturday"],
    stations: {
      1: "Patna Junction",
      2: "Bhopal Junction",
      3: "Prayagraj Junction",
      4: "Kanpur Central",
    },
    arivalTime: {
      1: "07:00",
      2: "10:00",
      3: "12:30",
      4: "15:00",
    },
    availableSeats: {
      ac1: 12,
      ac2: 30,
      ac3: 40,
      non_ac: 60,
    },
    price: {
      ac1: 3200,
      ac2: 2500,
      ac3: 1700,
      non_ac: 900,
    },
    dinnerAvailability: true,
  },
  {
    trainName: "Desh Kranti Express",
    trainNumber: 33004,
    days: ["Wednesday", "Friday", "Sunday"],
    stations: {
      1: "Nagpur Junction",
      2: "Bhopal Junction",
      3: "Jhansi Junction",
      4: "New Delhi",
    },
    arivalTime: {
      1: "05:30",
      2: "10:15",
      3: "15:30",
      4: "20:45",
    },
    availableSeats: {
      ac1: 22,
      ac2: 28,
      ac3: 50,
      non_ac: 90,
    },
    price: {
      ac1: 2900,
      ac2: 2300,
      ac3: 1600,
      non_ac: 850,
    },
    dinnerAvailability: true,
  }
];

export default trainsData;
