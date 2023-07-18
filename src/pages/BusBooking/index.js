import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./bus.css";
import { useAuth0 } from '@auth0/auth0-react';


const BusBooking = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [showSeats, setShowSeats] = useState(false); // State to track if the button is clicked
  const { user } = useAuth0();
  const handleSeatSelect = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const handleSearchClick = () => {
    setShowSeats(true); // Set showSeats to true when the button is clicked
  };

  const seatButtons = Array.from({ length: 50 }, (_, index) => (
    <button
      className="seatButton"
      key={index}
      onClick={() => handleSeatSelect(index + 1)}
    >
      Seat {index + 1}
    </button>
  ));

  return (
    <div className="container">
      <div>
        <h2 style={{textAlign:"center"}}>Enter your source and destination:</h2>
        {/* Input fields for 'from' and 'to' */}
        <input className='booking-input' type="text" placeholder="From" />
        <input className='booking-input' type="text" placeholder="To" />
        {/* Search button */}
        <button className='booking-btn' onClick={handleSearchClick}>Search</button>
      </div>
      {/* Show seats and other details if the button is clicked */}
      {showSeats && (
        <div>
          <h2>Select a seat:</h2>
          {seatButtons}
          {console.log(selectedSeat)}
        </div>
      )}
      {selectedSeat && showSeats && ( // Display other ticket details if a seat is selected
        <div className="ticketInfo">
          <h2>My Ticket:</h2>
          <p>Seat: {selectedSeat}</p>
          {/* Display other ticket details */}
          <div className="user-info">
        {user && (
          <>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            {/* <img src={user.picture} alt="User Profile" /> */}
          </>
        )}
        <Link to="https://buy.stripe.com/test_cN2bKO1qFaVcfxSeUU">
          <button className="payment">Book Now</button>
        </Link>
      </div>
        </div>
      )}
     
    </div>
  );
};

export default BusBooking;
