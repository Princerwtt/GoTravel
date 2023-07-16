import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import { useAuth0 } from '@auth0/auth0-react';
function Home() {
  const { isAuthenticated } = useAuth0();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Princerwtt/imdb-test/main/db.json')
      .then(response => response.json())
      .then(data => {
        setPlace(data.place);
        console.log(data.place[0].attributes.name);
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
          {isAuthenticated && ( // Conditionally render the button only if the user is authenticated
              <Link to='/plannewtrip' className='btn-link'>
                <button className='btn-pnt'>+ Plan new trip</button>
              </Link>
            )}
            <h2 className='new-trip-btn-h2' >You haven't created anything yet. Plan a new trip.</h2>
          </div>
        </div>
        <br />
        <div>


          <div className='hotel-search' >
            <div className='hotel-heading' >
              <h2>Need a place to stay?</h2>
            </div>
            <div className='search-option' >
              <div>
                <input type="text" placeholder='Enter city name' className='input-city' />
              </div>
              <div>
                <Link to='/hotels'>
                  <button className='search-booking' >Search for bookings</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='explore-div'>
          <div className='explore-heading'>
            <h1>Explore the Popular destination</h1>
          </div>
          <div className='content-div'>
            <div className='main'>
              {place.map(item => (
                <div key={item.id} className='name-img-p-div' >
                  <h2>{item.attributes.name}</h2>
                  <img src={item.attributes.image} alt={item.attributes.name} className='image' />
                  <p>{item.attributes.description}</p>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
      <br />
      <hr className='hr-tag' />
      <br />
      <Footer />
    </>
  )
}

export default Home
