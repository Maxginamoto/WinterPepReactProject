let flightData=[ 
    {
        FlightName:"SkyJet 101",
        FlightNumber:"SJ101",
        airline:"SkyJet Airways",
        from:"New Delhi",
        to:"Lucknow",
        departureTime:"08:00",
        arrivalTime:"09:30",
        price:{
            economy:4000,
            business:10000
        },
        duration:1.5,
        inFlightMeal:["Veg Meal", "Non-Veg Meal"],
    },
    {
        FlightName:"BlueAir 202",
        FlightNumber:"BA202",
        airline:"BlueAir",
        from:"Agra",
        to:"Kanpur",
        departureTime:"10:15",
        arrivalTime:"11:45",
        price:{
            economy:3500,
            business:9000
        },
        duration:1.5,
        inFlightMeal:["Sandwich", "Juice"],
    },
    {
        FlightName:"RapidFly 303",
        FlightNumber:"RF303",
        airline:"RapidFly",
        from:"Aligarh",
        to:"Jhansi",
        departureTime:"13:00",
        arrivalTime:"14:30",
        price:{
            economy:3700,
            business:9500
        },
        duration:1.5,
        inFlightMeal:["Salad", "Pasta"],
    },
    {
        FlightName:"AeroSwift 404",
        FlightNumber:"AS404",
        airline:"AeroSwift",
        from:"Bhopal",
        to:"Patna",
        departureTime:"15:00",
        arrivalTime:"16:45",
        price:{
            economy:4200,
            business:11000
        },
        duration:1.75,
        inFlightMeal:["Rice & Curry", "Soft Drink"],
    },
    {
        FlightName:"FlyEase 505",
        FlightNumber:"FE505",
        airline:"FlyEase",
        from:"Nagpur",
        to:"New Delhi",
        departureTime:"18:00",
        arrivalTime:"20:30",
        price:{
            economy:5000,
            business:12000
        },
        duration:2.5,
        inFlightMeal:["Chicken Wrap", "Fruit Platter"],
    },
    {
        FlightName:"AirSprint 606",
        FlightNumber:"AS606",
        airline:"AirSprint",
        from:"Prayagraj",
        to:"Agra",
        departureTime:"21:00",
        arrivalTime:"22:30",
        price:{
            economy:3800,
            business:9500
        },
        duration:1.5,
        inFlightMeal:["Muffin", "Coffee"],
    },
    {
        FlightName:"SkyWings 707",
        FlightNumber:"SW707",
        airline:"SkyWings",
        from:"Kanpur",
        to:"Bhopal",
        departureTime:"07:30",
        arrivalTime:"09:00",
        price:{
            economy:4100,
            business:10500
        },
        duration:1.5,
        inFlightMeal:["Cheese Sandwich", "Tea"],
    },
    {
        FlightName:"JetNova 808",
        FlightNumber:"JN808",
        airline:"JetNova",
        from:"Lucknow",
        to:"Patna",
        departureTime:"11:00",
        arrivalTime:"12:30",
        price:{
            economy:3900,
            business:9800
        },
        duration:1.5,
        inFlightMeal:["Dosa", "Juice"],
    },
    {
        FlightName:"SpeedBird 909",
        FlightNumber:"SB909",
        airline:"SpeedBird Airways",
        from:"Jhansi",
        to:"Nagpur",
        departureTime:"14:45",
        arrivalTime:"16:15",
        price:{
            economy:4300,
            business:11500
        },
        duration:1.5,
        inFlightMeal:["Paneer Roll", "Lemonade"],
    },
    {
        FlightName:"AeroSky 1001",
        FlightNumber:"AS1001",
        airline:"AeroSky",
        from:"Agra",
        to:"New Delhi",
        departureTime:"17:30",
        arrivalTime:"18:45",
        price:{
            economy:3200,
            business:8700
        },
        duration:1.25,
        inFlightMeal:["Croissant", "Hot Chocolate"],
    },
    {
        FlightName:"Nimbus 111",
        FlightNumber:"NB111",
        airline:"Nimbus Air",
        from:"Nagpur",
        to:"Kanpur",
        departureTime:"19:15",
        arrivalTime:"21:00",
        price:{
            economy:4700,
            business:12500
        },
        duration:1.75,
        inFlightMeal:["Grilled Chicken", "Red Wine"],
    },
    {
        FlightName:"RapidFly 1212",
        FlightNumber:"RF1212",
        airline:"RapidFly",
        from:"Bhopal",
        to:"Prayagraj",
        departureTime:"22:15",
        arrivalTime:"23:45",
        price:{
            economy:3500,
            business:9200
        },
        duration:1.5,
        inFlightMeal:["Veg Biryani", "Lassi"],
    },
    {
        FlightName:"CloudFly 1313",
        FlightNumber:"CF1313",
        airline:"CloudFly Airways",
        from:"Patna",
        to:"Lucknow",
        departureTime:"07:45",
        arrivalTime:"09:15",
        price:{
            economy:3600,
            business:8900
        },
        duration:1.5,
        inFlightMeal:["Omelette", "Juice"],
    },
    {
        FlightName:"TurboJet 1414",
        FlightNumber:"TJ1414",
        airline:"TurboJet Airlines",
        from:"New Delhi",
        to:"Jhansi",
        departureTime:"10:30",
        arrivalTime:"12:00",
        price:{
            economy:4000,
            business:10000
        },
        duration:1.5,
        inFlightMeal:["Paratha", "Yogurt"],
    },
    {
        FlightName:"SkyRush 1515",
        FlightNumber:"SR1515",
        airline:"SkyRush Airways",
        from:"Agra",
        to:"Bhopal",
        departureTime:"14:00",
        arrivalTime:"15:45",
        price:{
            economy:4200,
            business:11000
        },
        duration:1.75,
        inFlightMeal:["Fried Rice", "Soft Drink"],
    },
    {
        FlightName:"Nimbus 1616",
        FlightNumber:"NB1616",
        airline:"Nimbus Air",
        from:"Kanpur",
        to:"Nagpur",
        departureTime:"17:00",
        arrivalTime:"18:45",
        price:{
            economy:4500,
            business:11500
        },
        duration:1.75,
        inFlightMeal:["Pasta", "Wine"],
    },
    {
        FlightName:"FlyVista 1717",
        FlightNumber:"FV1717",
        airline:"FlyVista Airways",
        from:"Aligarh",
        to:"Prayagraj",
        departureTime:"19:30",
        arrivalTime:"21:00",
        price:{
            economy:3700,
            business:9400
        },
        duration:1.5,
        inFlightMeal:["Soup", "Garlic Bread"],
    },
    {
        FlightName:"JetSpeed 1818",
        FlightNumber:"JS1818",
        airline:"JetSpeed Airways",
        from:"Lucknow",
        to:"Agra",
        departureTime:"22:15",
        arrivalTime:"23:45",
        price:{
            economy:3400,
            business:8800
        },
        duration:1.5,
        inFlightMeal:["Cookies", "Tea"],
    }
];
export default flightData;