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

  return (
    <>
      <div className="nav-container">
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
              <p style={{background:'#171010'}} >HOME</p>
            </Link>
            <Link to="/travelguides" className="pages-name">
              <p style={{background:'#171010'}} >TRAVEL GUIDES</p>
            </Link>
            {isAuthenticated && (
              <>
                <Link to="/package" className="pages-name">
                  <p style={{background:'#171010'}} >PACKAGES</p>
                </Link>
                <Link to="/hotels" className="pages-name">
                  <p style={{background:'#171010'}} >HOTELS</p>
                </Link>
                <Link to="/busbooking" className="pages-name">
                  <p style={{background:'#171010'}} >BUS BOOKING</p>
                </Link>
              </>
            )}
            <Link to="/aboutus" className="pages-name">
              <p style={{background:'#171010'}} >ABOUT US</p>
            </Link>
            <Link to="/contactus" className="pages-name">
              <p style={{background:'#171010'}} >CONTACT US</p>
            </Link>
          </div>
          <div className="pages"  >
            {
              isAuthenticated ? (
                <div className="pages-name">
                  <div className='name-dropdown' >
                    <div style={{display:'flex',alignItems:'center'}} >{'Welcome ' + user.name}</div>
                    <div>
                      <button className="button-dropdown" onClick={toggleDropdown} style= {{color:'white'}} >&#x25BC;
                      </button>
                    </div>
                  </div>
                  {
                    showDropdown && (
                      <div className="dropdown-menu"  >
                        <Link to="/profile" className="pages-name dropdown-item" style={{display:'flex',alignItems:'center'}}  >
                          Profile
                        </Link>
                        <button
                          className='logout'  
                          onClick={() => logout({ returnTo: window.location.origin })}
                        >Log Out</button>
                      </div>
                    )
                  }
                </div>
              ) : (
                <div className="pages-name">
                  <button className="login-signup-button" onClick={() => loginWithRedirect()}>
                    LogIn / SignUp</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
