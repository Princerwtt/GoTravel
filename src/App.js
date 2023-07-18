import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PackageDetails from './pages/PackageDetails';
import TravelGuides from './pages/TravelGuides';
import Hotels from './pages/Hotels/Hotels.js';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';

import PlanNewTrip from './pages/PlanNewTrip';
import Profile from './pages/Profile';
import StartPlanning from './pages/StartPlanning';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Copyright from './pages/Copyright';
import { useState } from "react"
import Package from './pages/Package';
import BusBooking from './pages/BusBooking';

import CardDetails from './components/CardDetails';



function App() {

  const [startPlanning, setStartPlanning] = useState('');
  
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:id' element={<CardDetails />} />
          <Route path="/package" element={<Package />} />
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path='/travelguides' element={<TravelGuides />} />
          <Route path='/travelguides/:id' element={<CardDetails />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/busbooking' element={<BusBooking/>} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/plannewtrip' element={<PlanNewTrip setStartPlanning={setStartPlanning} startPlanning={startPlanning} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/startplanning' element={<StartPlanning name={startPlanning} />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/copyright' element={<Copyright />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
