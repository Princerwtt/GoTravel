import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./bus.css";
import { useAuth0 } from '@auth0/auth0-react';
const BusBooking = () => {
    const [selectedSeat, setSelectedSeat] = useState(null);
    const { user } = useAuth0();
    const handleSeatSelect = (seatNumber) => {
        setSelectedSeat(seatNumber);
    };



    const seatButtons = Array.from({ length: 50 }, (_, index) => (
        <button className='seatButton' key={index} onClick={() => handleSeatSelect(index + 1)}>
            Seat {index + 1}
        </button>
    ));

    return (
        <div className="container">
            <div>
                <h2>Select a seat:</h2>
                {seatButtons}
                {console.log(selectedSeat)}
            </div>
            <div className='ticketInfo'>
                <h2>My Ticket:</h2>
                <p>Seat: {selectedSeat}</p>

                {/* Display other ticket details */}
            </div>
            <div className='user-info'>
                {user && (
                    <>
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                        {/* <img src={user.picture} alt="User Profile" /> */}
                    </>
                )}
                <Link to="https://buy.stripe.com/test_cN2bKO1qFaVcfxSeUU">
                    <button className='payment'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default BusBooking;
