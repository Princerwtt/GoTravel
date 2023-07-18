import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import { useAuth0 } from '@auth0/auth0-react';
import Map from '.././../components/Map';

function Home() {

  const { isAuthenticated } = useAuth0();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Princerwtt/imdb-test/main/place.json')
      .then(response => response.json())
      .then(data => {
        setPlace(data.place);
        console.log(data.place.name);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br />
      <section>
        <div>

          <div className='new-trip-btn' >
            <p className='new-trip-btn-p' >You haven't created anything yet.<b style={{color:'#f75940'}} >Plan a new trip</b>.</p>
            {isAuthenticated && (
              <Link to='/plannewtrip' className='btn-link'>
                <button className='btn-pnt'>+ Plan new trip</button>
              </Link>
            )}
          </div>
        </div>
        <br />
        <div className='hotel-search' >
          <div>
            <div className='hotel-heading' >
              <h2>Need a place to stay?</h2>
            </div>
            <div className='search-option' >
              <div>
                <input type="text" placeholder='Enter city name' className='input-city' />
              </div>
              <div>
                <Link to='/hotels' >
                  <button className='search-booking' >Search for bookings</button>

                </Link>
              </div>
            </div>
          </div>
          <div   >
            <img src="https://tourism.bihar.gov.in/content/dam/bihar-tourism/others/hotel.svg" alt="hotelimg" width='200rem'  />
          </div>
        </div>
        <br />
        <br />
        {isAuthenticated && (
        <div style={{}} >
          <Map/>
        </div>
        )}
        <br />
        <br /><br />
        <br />
        <br />
        <br />
        <br />
        <div className='explore-div'>
          <div >
            <p className='explore-heading' >Explore</p>
            <p className='home-popu-dest-line' >Popular destinations</p>
          </div>
          <br />
          <div className='content-div'>
            <div className='main'>
              {place.map(item => (
                <Link to={`/home/${item.id}`} key={item.id} className='name-img-p-div'>
                  <img src={item.image} alt={item.name} className='image' />
                  <h2>{item.name}</h2>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <hr className='hr-tag' />
      <br />
      <Footer />
      <br />
    </>
  );
}

export default Home;
