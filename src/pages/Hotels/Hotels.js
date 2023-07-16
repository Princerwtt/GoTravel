import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";

function Hotels() {
  const [query, setQuery] = useState("");
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Princerwtt/imdb-test/main/hotel.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setHotel(data.hotel);
        console.log(data.hotel[0].name);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="h-search-div">
        <div>
          <input type="text" placeholder="Enter city name" onChange={event => setQuery(event.target.value)} />
        </div>
        <div>
          <input type="date"/>
        </div>
        <div>
          <input type="number" placeholder="Rooms" />
        </div>
      </div>
      <div className="h-hotel">
        <div className="h-hotel-content-div" >
          {hotel
            .filter((item) => {
              if (query === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return item;
              }
              return null;
            })
          .map((item) => (
            <div className="h-hotel-search-item" key={item.id}>
              <img className="siImg" src={item.image[0]} alt={item.name} />
              <div className="siDesc">
                <h2 className="siTitle">{item.name}</h2>
                <p className="silocation">{item.location}</p>
                <p>{item.facilities}</p>
              </div>
              <div className="siDetails">
                <div className="siRating">
                  <span>Excellent</span>
                  <p>{item.rating}</p>
                </div>
                <div className="siDetailTexts">
                  <p className="siPrice">Rs.{item.priceRange}</p>
                  <span className="siTaxOp">Includes Taxes and fees</span>
                  <button className="siCheckButton">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <hr className="hrTag" />
      <br/>
      <Footer/>

    </>
  )
}

export default Hotels
