import React from "react";
import { Card, Button } from "react-bootstrap";
import trainsData from "./TrainData.js";
import "./Trains.css";

const Trains = () => {
  return (
    <div className="train-container">
      {trainsData.map((train) => (
        <Card key={train.trainNumber} className="train-card">
          <Card.Body className="d-flex align-items-center">
            <div className="train-info">
              <Card.Title>{train.trainName} ({train.trainNumber})</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Runs on: {train.days.join(", ")}
              </Card.Subtitle>
              <Card.Text>
                <strong>Route:</strong> {Object.values(train.stations).join(" → ")}
              </Card.Text>
              <Card.Text>
                <strong>Timings:</strong> {Object.entries(train.arivalTime)
                  .map(([key, time]) => `${time}`)
                  .join(" → ")}
              </Card.Text>
              <Card.Text>
                <strong>Seats:</strong> AC1: {train.availableSeats.ac1}, AC2: {train.availableSeats.ac2}, 
                AC3: {train.availableSeats.ac3}, Non-AC: {train.availableSeats.non_ac}
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> AC1: ₹{train.price.ac1}, AC2: ₹{train.price.ac2}, 
                AC3: ₹{train.price.ac3}, Non-AC: ₹{train.price.non_ac}
              </Card.Text>
              <Card.Text>
                <strong>Dinner:</strong> {train.dinnerAvailability ? "Available " : "Not Available "}
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Trains;
