import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Footer from '../../components/Footer';
import "./style.css"

function Package() {
  const [show, setShow] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

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
  const handlePackageClick = (packageId) => {
    const selected = show.find((item) => item.id === packageId);
    setSelectedPackage(selected);
  };

  return (
    <>
      <br />
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3000}
          infiniteLoop={true}
          showStatus={false}
        >
          {show.map((item) => (
            <div
              key={item.id}
              className="slide-div"
              onClick={() => handlePackageClick(item.id)}
            >
              <div className="posterImage">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  
                  style={{ height: '500px' }}
                />
              </div>
              <div className="posterImage__overlay">
                
              </div>
              <h2 className="posterImage__title">{item.name}</h2>
            </div>
          ))}
        </Carousel>

        {selectedPackage && (
          <div style={{}}>
            <h2 style={{ textAlign: 'center', fontFamily:"sans-serif" }}>{selectedPackage.name}</h2>
            <img src={selectedPackage.image[1]} style={{
              width: "350px",
              height: "425px",

              borderRadius: "20px",
              // position: "absolute",
              bottom: "20px",
              left: "20px",
              marginLeft:"600px"
            }} />
            <p className='p-text'>Duration: {selectedPackage.duration}</p>
            <p className='p-text'>Destinations: {selectedPackage.destinations}</p>
            <p className='p-text'>Description: {selectedPackage.description}</p>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr className='hr-tag' />
      <br />
      <Footer />
      <br />
    </>
  );
}

export default Package;
