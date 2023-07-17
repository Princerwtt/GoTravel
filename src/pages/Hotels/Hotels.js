import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Hotels() {
  const [query, setQuery] = useState("");
  const [rooms, setRooms] = useState("");
  const [distance, setDistance] = useState("");
  const [friendly, setFriendly] = useState("");
  const [rating, setRating] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const currentDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [hotel, setHotel] = useState(null);

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
    const roomsMatch = rooms === "" || item.rooms === rooms;
    const distanceMatch = distance === "" || item.distance === distance;
    const friendlyMatch = friendly === "" || item.friendly === friendly;
    const ratingMatch = rating === "" || item.rating === rating;
    const priceRangeMatch = priceRange === "" || item.priceRange === priceRange;

    return (
      locationMatch &&
      roomsMatch &&
      distanceMatch &&
      friendlyMatch &&
      ratingMatch &&
      priceRangeMatch
    );
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <br />
      <div className="abcd">
        <div>
          <div className="searchDiv">
            <h2 className="Search">Search Hotels</h2>
            <div className="co">
              <div className="abcde">
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
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Adults"
                  className="inputCity"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter city name"
                  className="inputCity"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />
        <div className="exploreDiv">
          <div className="exploreHeading">
            <h1>Popular Hotels</h1>
            <div className="filterSection">
              <div className="filter">
                <h3 className="afilter"> Apply Filters </h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Rooms left"
                  className="inputRooms"
                  onChange={(event) => setRooms(event.target.value)}
                />
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
                  <option value="6000"> greater than 5000</option>
                  <option value="5000"> 4500-5000</option>
                  <option value="4000">3500-4499</option>
                  <option value="3000">2500-3499</option>
                  <option value="2000">less than 2500</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className="contentDiv">
            <div className="mainss">
              {hotel.filter(handleFilter).map((item) => (
                <div className="searchItem" key={item.id}>
                  <img className="siImg" src={item.image[0]} alt={item.name} />

                  <div className="siDesc">
                    <h2 className="siTitle">{item.name}</h2>
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
                      <span className="siTaxOp">Includes Taxes and fees</span>
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
          <br />
        </div>
      </div>
      <br />
      <hr className="hrTag" />
      <br />
      <div className="footer">
        <div style={{ color: "black" }}>
          <p style={{ color: "black" }}>Made with ❤ </p>
          <p style={{ color: "black" }}>© 2023 goTravel.</p>
        </div>
        <div style={{ color: "black" }}>
          <p style={{ fontWeight: "bold", color: "black" }}>goTravel</p>
          <br />
          <Link to="/contactus" className="link">
            <p style={{ color: "black" }}>Terms</p>
          </Link>
          <Link to="/contactus" className="link">
            <p style={{ color: "black" }}>Privacy policy</p>
          </Link>
          <Link to="/contactus" className="link">
            <p style={{ color: "black" }}>Copyright</p>
          </Link>
        </div>
        <div style={{ color: "black" }}>
          <p style={{ fontWeight: "bold", color: "black" }}>Contributers</p>
          <br />
          <Link
            to="https://www.linkedin.com/in/prince-rawattt/"
            target="_blank"
            className="link"
          >
            <p style={{ color: "black" }}>Prince Rawat</p>
          </Link>
          <Link
            to="https://www.linkedin.com/in/shivamkumar8009/"
            target="_blank"
            className="link"
          >
            <p style={{ color: "black" }}>Shivam Kumar</p>
          </Link>
          <Link
            to="http://www.linkedin.com/in/pranjul56667"
            target="_blank"
            className="link"
          >
            <p style={{ color: "black" }}>Kumar Pranjul</p>
          </Link>
        </div>
      </div>
      <br />
    </>
  );
}

export default Hotels;
