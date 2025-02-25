import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import img from "../Data/Gemini_Generated.jpg";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="poster-container">
                <img src={img} alt="Company Poster" className="poster" />
            </div>

            <div className="transport-container">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcenWyWmigGdQx2j1es0HvOOwE1HevxJD-aA&s"
                    alt="Train"
                    className="transport-image train"
                    onClick={() => navigate("/trains")}
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17xS4K2ijBJOExKPFxTVT1uqPU5bQYqN2TA&s"
                    alt="Hotels"
                    className="transport-image hotel"
                    onClick={() => navigate("/hotels")}
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7ZYJZczjY7eKW-B6VbkzGbJCHJByy6c-JA&s"
                    alt="Airplane"
                    className="transport-image airplane"
                    onClick={() => navigate("/flights")}
                />
            </div>
        </div>
    );
};

export default Home;
