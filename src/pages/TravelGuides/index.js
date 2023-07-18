import React, {useEffect, useState} from 'react'
import './style.css'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function TravelGuides() {

  const [query, setQuery] = useState("")
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Princerwtt/imdb-test/main/place.json')
      .then(response => response.json())
      .then(data => {
        setPlace(data.place);
        console.log(data.place[0].name);
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
      <br/>    
      <div>
        <div className='search-div' >
          <h2 >Explore travel guides and itineraries</h2>
          <div>
              <input type="text"  placeholder='search for destination' className='input-city' onChange={event => setQuery(event.target.value)}/>
            </div>
            <br/>
        </div>
      </div>
      <br />
      <div className='explore-div'>
        <br />
        <br />
        <div className='content-div'>
          <div className='main'>
            {             
              place.filter(item => {
                if (query === '') {
                  return item;
                } else if (item.address.toLowerCase().includes(query.toLowerCase())) {
                  return item;
                }
                return null;
              }
              ).map(item => (
                <Link to={`/travelguides/${item.id}`} key={item.id} className='name-img-p-div'>
                  <img src={item.image} alt={item.name} className='image' />

                  <h2>{item.name}</h2>
                </Link>
                )
              )
            }
          </div>
        </div>
        <br/>
        <br/>
      </div>
      <br/>
      <hr className='hr-tag' />
      <br/>
      <Footer/>
      <br/>
    </>
  )
}

export default TravelGuides
