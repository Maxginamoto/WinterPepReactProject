import React from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from "../Data/QR.png";
import "./Booking.css";
function Booking() {
    const navigate = useNavigate();
    const location = useLocation()
    let data = location.state;
    if(data.flag==='Hotel'){
        return ( <>
        <h5>You're booking a <strong>{data.type}</strong> at <strong>{data.name}</strong> for the low price of <strong>₹{data.price}/night</strong></h5>
        <p><img src={img} alt="QR for Payment was supposed to be here" className='qr'/>
        <button onClick={() => navigate("/")} className='homebutton'>Home here</button></p>
        </> );
    }else if(data.flag==='Train'){
        return ( <>
        <h5>You're booking a <strong>{data.type}</strong> ticket for the <strong>{data.name}</strong> for the low price of <strong>₹{data.price}/-</strong></h5>
        <p><img src={img} alt="QR for Payment was supposed to be here" className='qr'/>
        <button onClick={() => navigate("/")} className='homebutton'>Home here</button></p>
        </> );
    }else if(data.flag==="Flight"){
        return ( <>
        <p>You're booking a <strong>{data.type} Class</strong> on the flight <strong>{data.name}</strong> for the low price of <strong>₹{data.price}/-</strong> </p>
        <p><img src={img} alt="QR for Payment was supposed to be here" className='qr'/>
        <button onClick={() => navigate("/")} className='homebutton'>Home here</button></p>
        </> );
    }
    
}

export default Booking;
