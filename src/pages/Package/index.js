import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Map from '.././../components/Map';

function Package() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Princerwtt/imdb-test/main/tour.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setShow(data.tour);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching popular tours:', error));
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3000}
        infiniteLoop={true}
        showStatus={false}
      >
        {show.map((item) => (
          <Link to={`/package/${item.id}`} key={item.id} className="slide-div">
            <div className="posterImage">
              <img
                src={item.image[0]}
                alt={item.name}
                className="image"
                style={{ height: '500px' }}
              />
            </div>
            <div className="posterImage__overlay">
              <h2 className="posterImage__title">{item.name}</h2>
              {/* <p className="posterImage__description">{item.description}</p> */}
            </div>
          </Link>
        ))}
      </Carousel>
      <Map/>
    </div>
  );
}

export default Package;
