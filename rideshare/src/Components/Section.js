import React from 'react';
import vehicleLogo from "../images/vehicleLogo.jpg";
import payment from "../images/payment.jpg";
import career from "../images/career.jpg";
import '../App.css';


const Section = () => {
  return (
    <div className="cardContainer">
    <div className="rideItems">
        <img src={vehicleLogo} alt = ""/>
        <button>Book a ride</button>
    </div>
    <div className="rideItems">
        <img src={payment} alt = ""/>
        <button>Pay</button>
    </div>
    <div className="rideItems">
        <img src={career} alt = ""/>
        <button>Jobs & Career</button>
    </div>
    </div>
  )
}

export default Section