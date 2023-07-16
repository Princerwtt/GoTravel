import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./styles.css"

function PackageDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Princerwtt/imdb-test/main/tour.json'
    )
      .then((res) => res.json())
      .then((data) => {
        const selectedTour = data.tour.find((item) => item.id === id);
        setTour(selectedTour);
      })
      .catch((error) => console.error('Error fetching tour:', error));
  }, [id]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <div className='centered-div' >
      <h2>{tour.name}</h2>
      <img src={tour.image[0]} alt={tour.name} className='img-des' />
      <img src={tour.image[1]} alt={tour.name} className='img-detail'/>

      <p>Duration: {tour.duration}</p>
      <p>Destinations: {tour.destinations.join(', ')}</p>
      <p>Description: {tour.description}</p>
    </div>
  );
}

export default PackageDetails;
