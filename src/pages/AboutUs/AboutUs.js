import React from "react";
import './styles.css';
import Footer from "../../components/Footer";

function AboutUs() {
  return (
    <>
      <div className="container4">
        <header className="head">
          <h1>About Us</h1>
        </header>
        <main className="mai">
          <section className="sec">
            <h2 className='htwo'>Welcome to goTravel _:)</h2>
            <p className='parag' style={{ textAlign: "justify" }}>
              At goTravel, we believe that every journey is a unique experience
              waiting to unfold. Our platform is designed to empower travelers
              like you to create personalized and unforgettable adventures.
             Whether you're a seasoned globetrotter or a first-time explorer,
              we're here to make your trip planning process seamless and
             enjoyable.
            </p>
            <p className='parag' style={{ textAlign: "justify" }}>
              <b>Our Mission:</b> At goTravel, our mission is to inspire and
              empower travelers to create memorable experiences. We strive to be
              your go-to resource for itinerary planning, helping you craft
              journeys that reflect your unique interests, budget, and timeline.
              We're committed to providing you with a platform that is
              user-friendly, reliable, and constantly evolving to meet your needs.
              Join our community of passionate travelers and embark on a journey
              of a lifetime. Start planning your next adventure with goTravel
              today! Happy travels, The goTravel Team!
            </p>
          </section>
       </main>      
      </div>
      <br />
      <hr className='hr-tag' />
      <br />
      <Footer/>
      <br />
    </>
  );
}

export default AboutUs;
