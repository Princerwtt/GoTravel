import React, { useState } from 'react';
import './style.css';
import { Navigate } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function PlanNewTrip(props) {

  const [placename, setPlacename] = useState('');
  const handleStartplanning = () => {
    if (placename === 'jammu' || placename === 'kashmir' || placename === 'shimla' || placename === 'manali' || placename === 'chandigarh' || placename === 'delhi' || placename === 'jaipur' || placename === 'lucknow' || placename === 'banaras' || placename === 'mumbai' || placename === 'goa' || placename === 'nainital') {
      props.setStartPlanning(placename);
      
  }};

  const handlePlacenameChange = (e) => {
    setPlacename(e.target.value);
  };

  if (props.startPlanning) {
    return <Navigate to="/startplanning" target="_blank" />
  }
  else{
    return (
      <>
        <br />
        <div className='pnt-big-div-container'>
          <div className='pnt-main-container' >
            <div>
              <h1>Plan a new trip</h1>
            </div>
            <div>
              <input  value={placename} onChange={handlePlacenameChange} placeholder="Enter the city name" className='input-city'/>
            </div>
            <br />
            <div>
              <button onClick={handleStartplanning} className='start-planning'  >Start Planning</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr className='hr-tag' />
        <br />
        <Footer />
        <br />            
      </>
    );
  }
}