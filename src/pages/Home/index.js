import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import { useAuth0 } from '@auth0/auth0-react';
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
            {isAuthenticated && (
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
              <h2 style={{background:'#423F3E'}} >Need a place to stay?</h2>
            </div>
            <div className='search-option' >
              <div style={{background:'#423F3E'}} >
                <input type="text" placeholder='Enter city name' className='input-city' />
              </div>
              <div style={{background:'#423F3E'}} >
                <Link to='/hotels' style={{background:'#423F3E'}} >
                  <button className='search-booking' >Search for bookings</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='explore-div'>
          <div className='explore-heading'>
            <h1 style={{background:'#423F3E'}} >Explore the Popular destination</h1>
          </div>
          <br />
          <div className='content-div'>
            <div className='main'>
              {place.map(item => (
                <Link to={`/home/${item.id}`} key={item.id} className='name-img-p-div' style={{textDecoration: 'none'}} >
                  <h2 style={{background:'#2B2B2B'}} >{item.name}</h2>
                  <img src={item.image} alt={item.name} className='image' />
                  {/* <p style={{background:'#2B2B2B'}} >{item.description}</p> */}
                </Link>
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
      <br />
    </>
  )
}

export default Home
