import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { useAuth0 } from '@auth0/auth0-react';

function Navigation() {

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="navbar">
        <div>
          <Link to="/" className="logo-name"  >
            <h1 className='gotravel-heading'  >
              <MdOutlineTravelExplore className="travel" />
              goTravel

            </h1>
          </Link>
        </div>
        <div className="pages">
          <Link to="/home" className="pages-name">
            <p>Home</p>
          </Link>
          <Link to="/travelguides" className="pages-name">
            <p>Travel guides</p>
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/hotels" className="pages-name">
                <p>Hotels</p>
              </Link>
              <Link to="/package" className="pages-name">
                <p>Deals</p>
              </Link>

            </>
          )}
          <Link to="/aboutus" className="pages-name">
            <p>About us</p>
          </Link>
          <Link to="/contactus" className="pages-name">
            <p>Contact us</p>
          </Link>
        </div>
        <div className="pages"  >
          {
            isAuthenticated ? (
              <div className="dropdown" onMouseLeave={closeDropdown}>
                <button className="dropdown-toggle" onMouseEnter={toggleDropdown}>
                  {'Welcome ' + user.name} &#x25BC;
                </button>
                {showDropdown && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/profile" className="pages-name dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/busbooking" className="pages-name dropdown-item">
                        Bus Booking
                      </Link>
                    </li>
                    <li>
                      <button className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
                        Log Out
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div>
                <button className="login-signup-button" onClick={() => loginWithRedirect()}>
                  LogIn / SignUp
                </button>
              </div>
            )
          }

        </div>

      </div>
    </>
  );
}

export default Navigation;
