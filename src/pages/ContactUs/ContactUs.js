import React, { useState } from "react";
import "./styles.css";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //connect with firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { fullName, email, message } = userData;

    if (fullName && email && message) {
      const res = await fetch(
        "https://gotravel-ac2fd-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          fullName: "",
          email: "",
          message: "",
        });
        alert("Data saved successfully");
      } else {
        alert("Please fill the Data");
      }
    } else {
      alert("Please fill the Data");
    }
  };

  return (
    <div className="bb">
    <header className="head1">
        <h1>Contact Us</h1>
      </header>
      <div className="container3">
        {/* <div className="contact-info3">
          <h1>Contact Us</h1>
          <p>
            <b>
              E-mail us on kumarpranjulkp9236@gmail.com with any question and
              inquires or call +91-9076756667. We should be happy to answer your
              questions and set up the meeting with you.
            </b>
          </p>
          <br />
          <p className="bl">
            <b>Address:</b>
          </p>
          <p> C-42, Awas Vikas Colony, Unnao, Uttar Pradesh, India </p>
          <p className="bl">
            <b>Email:</b>
          </p>
          <p>kumarpranjulkp9236@gmail.com</p>
          <p className="bl">
            <b>Mobile:</b>
          </p>
          <p> +91-9076756667</p>
        </div> */}
        <div className="contact-form3">
          <form method="POST">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={userData.fullName}
              onChange={postUserData}
              name="fullName"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={postUserData}
              name="email"
              required
            />

            <label htmlFor="message">Message:</label>
            <input
              type="text"
              id="message"
              value={userData.message}
              onChange={postUserData}
              name="message"
              required
            />

            <button type="submit" onClick={submitData}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
