import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import "./styles.css"

function CardDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Princerwtt/imdb-test/main/place.json'
    )
      .then((res) => res.json())
      .then((data) => {
        const selectePlace = data.place.find((item) => item.id === id);
        setPlace(selectePlace);
        console.log(selectePlace)
      })
      .catch((error) => console.error('Error fetching place:', error));
  }, [id]);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div className='centered-div' >
      <h2>{place.name}</h2>
      <img src={place.image} alt={place.name} className='img-des' />
      {/* <img src={place.image[1]} alt={place.name} className='img-detail'/> */}

      {/* <p>Duration: {place.duration}</p> */}
      {/* <p>Destinations: {place.destinations.join(', ')}</p> */}
      <p>Description: {place.description}</p>
    </div>
  );
}

export default CardDetails;
