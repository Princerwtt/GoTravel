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
          <div style={{background:'whitesmoke'}} >
            <Link to="/" className="logo-name">
              <h1 className='gotravel-heading' >
                <MdOutlineTravelExplore className="travel" />
                goTravel
              </h1>
            </Link>
          </div>
          <div className="pages">
            <Link to="/home" className="pages-name">
              <p style={{background:'whitesmoke'}} >Home</p>
            </Link>
            <Link to="/travelguides" className="pages-name">
              <p style={{background:'whitesmoke'}} >Travel guides</p>
            </Link>
            {isAuthenticated && (
              <>
                <Link to="/package" className="pages-name">
                  <p style={{ background: 'whitesmoke' }}>Packages</p>
                </Link>
                <Link to="/hotels" className="pages-name">
                  <p style={{ background: 'whitesmoke' }}>Hotels</p>
                </Link>
              </>
            )}
            <Link to="/aboutus" className="pages-name">
              <p style={{background:'whitesmoke'}} >About Us</p>
            </Link>
            <Link to="/contactus" className="pages-name">
              <p style={{background:'whitesmoke'}} >Contact Us</p>
            </Link>
          </div>
          <div className="pages"  >
            {isAuthenticated ? (
              <div className="pages-name">
                {/* Display user name if authenticated */}
                <div className='name-dropdown' >
                  <div style={{display:'flex',alignItems:'center',background:'whitesmoke'}} >{'Welcome ' + user.name}</div>
                  <div>
                    <button className="button-dropdown" onClick={toggleDropdown} style={{background:'whitesmoke',color:'black'}} >&#x25BC;
                  </button>

                  </div>


                </div>
                
                {showDropdown && (
                  <div className="dropdown-menu" style={{background:'whitesmoke'}} >
                    <Link to="/profile" className="pages-name dropdown-item" style={{display:'flex',alignItems:'center',background:'whitesmoke'}}  >
                      Profile
                    </Link>
                    <button
                      className='logout'  
                      onClick={() => logout({ returnTo: window.location.origin })}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="pages-name">
                {/* Login button */}
                <button className="login-signup-button" onClick={() => loginWithRedirect()}>
                  LogIn / SignUp 
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;