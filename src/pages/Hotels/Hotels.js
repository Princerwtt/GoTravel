import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';

function Hotels() {
  const [query, setQuery] = useState("");
  const [stars, setStars] = useState("");
  const [distance, setDistance] = useState("");
  const [friendly, setFriendly] = useState("");
  const [rating, setRating] = useState("");
  const [hills, setHills] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const currentDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [hotel, setHotel] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://shivamkumar8009.github.io/hotel_api/hotel.json")
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

  const handleFilter = (item) => {
    const locationMatch = item.location
      .toLowerCase()
      .includes(query.toLowerCase());
    const distanceMatch = distance === "" || item.distance === distance;
    const friendlyMatch = friendly === "" || item.friendly === friendly;
    const ratingMatch = rating === "" || item.rating === rating;
    const priceRangeMatch =
      priceRange === "" || item.priceRange === priceRange;
    const hillsMatch = hills === "" || item.hills === hills;
    const starsMatch = stars === "" || item.stars === stars;

    return (
      locationMatch &&
      distanceMatch &&
      friendlyMatch &&
      ratingMatch &&
      priceRangeMatch &&
      hillsMatch &&
      starsMatch
    );
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const sortedHotels = hotel
    .filter(handleFilter)
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.priceRange - b.priceRange;
      } else {
        return b.priceRange - a.priceRange;
      }
    });

    const handleRefresh = () => {
      window.location.reload();
    };

  return (
    <>
      <br />
      <div className="abcd">
        <div>
          <div className="searchDiv">
            <div className="co">
              <div className="abcde">
                <h3 className="Search">Search Hotels</h3>
                <div>
                  <input
                    type="date"
                    placeholder="Check-in date"
                    className="check"
                    value={selectedDate}
                    onChange={handleDateChange}
                    min={currentDate}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Check-out date"
                    className="check"
                    onChange={handleDateChange}
                    min={selectedDate}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder=" 🚹1room,2guests"
                    className="inputCity"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder=" Search city                                  🔍︎"
                    className="inputCity"
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />
        <div className="siAbcd">
          <div className="filterSection">
            <div className="filter">
              <b>Apply Filters</b>
            </div>
            <div>
              <select
                type="text"
                placeholder="distance from airport"
                className="siDistanceAp"
                onChange={(event) => setDistance(event.target.value)}
              >
                <option>-- Distance ✈ --</option>
                <option value="0.5">less than 1 km</option>
                <option value="1">1- 1.99 km</option>
                <option value="2">2-2.99 km</option>
                <option value="3">more than 2 km</option>
              </select>
            </div>
            <div>
              <select
                type="text"
                placeholder="couple friendly"
                className="siCouple"
                onChange={(event) => setFriendly(event.target.value)}
              >
                <option>-- Couple Friendly --</option>
                <option value="yes">Yes</option>
                <option value="no">NO</option>
              </select>
            </div>
            <div>
              <select
                type="text"
                placeholder="rating"
                className="inputRating"
                onChange={(event) => setRating(event.target.value)}
              >
                <option>-- Rating --</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
            <div>
              <select
                type="text"
                placeholder="Price Range"
                className="inputRating"
                onChange={(event) => setPriceRange(event.target.value)}
              >
                <option>-- Price Range --</option>
                <option value="6000">greater than 5000</option>
                <option value="5000">4500-5000</option>
                <option value="4000">3500-4499</option>
                <option value="3000">2500-3499</option>
                <option value="2000">less than 2500</option>
              </select>
            </div>
            <div>
              <div className="filter"><b>Categories:-</b></div>
              <div>
                <select
                  type="text"
                  placeholder="Hills"
                  className="inputRating"
                  onChange={(event) => setHills(event.target.value)}
                >
                  <option>-- Hills --</option>
                  <option value="Hills 🌄">Yes</option>
                  <option value="No Hill View">No</option>
                </select>
              </div>
              <div>
                <select
                  type="text"
                  placeholder="Stars"
                  className="inputRating"
                  onChange={(event) => setStars(event.target.value)}
                >
                  <option>-- Stars --</option>
                  <option value="★★★★★">5 star</option>
                  <option value="★★★★">4 star</option>
                  <option value="★★★">3 star</option>
                  <option value="★★">2 star</option>
                </select>
              </div>
            </div>
            <button onClick={handleRefresh} className="clearButton">
             Clear Filters
             </button>
          </div>
          <div className="exploreDiv">
          
            <div className="exploreHeading">

             
              <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="sortButton"
            >
              Sort Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
            </button>
            </div>
          
            <br />
            
            <div className="contentDiv">
              <div className="mainss">
                {sortedHotels.map((item) => (
                  <div className="searchItem" key={item.id}>
                    <img
                      className="siImg"
                      src={item.image[0]}
                      alt={item.name}
                    />

                    <div className="siDesc">
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{textDecoration:'none'}}
                      >
                        <h2 className="siTitle">{item.name}</h2>
                      </a>
                      <h4 className="sistar">{item.stars}</h4>
                      <p className="silocation">{item.location}</p>
                      <p className="sifacilities">{item.facilities}</p>
                    </div>
                    <div className="siDesc2">
                      <p className="siTitle2">
                        •Couple Friendly: {item.friendly}
                      </p>
                      <p className="sihills2">•{item.hills}</p>
                      <p className="sirooms2">•{item.rooms} rooms left</p>
                      <p className="sidistance2">•{item.distance} km ✈</p>
                      <p className="sicancel2">•{item.cancel}</p>
                    </div>

                    <div className="siDetails">
                      <div className="siRating">
                        <span>{item.remarks}</span>
                        <p>{item.rating}</p>
                      </div>
                      <div className="siDetailTexts">
                        <p className="siPrice">₹{item.priceRange} per room</p>
                        <span className="siTaxOp">
                          Includes Taxes and fees
                        </span>
                        <Link to="https://buy.stripe.com/test_cN2bKO1qFaVcfxSeUU" >
                        <button className="siCheckButton">Book Now</button>
                      </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <br />
          </div>
          
        </div>
      </div>
      <br />
      <hr className="hrTag" />
      <br />
      <Footer />
    </>
  );
}

export default Hotels;