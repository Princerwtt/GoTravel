import React, { useState } from 'react';
import './style.css';
import { Navigate } from 'react-router-dom';

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
        <div className='pnt-big-div-container'>
          <div className='pnt-main-container' >
            <div style={{background:'#423F3E'}} >
              <h1 style={{background:'#423F3E'}} >Plan a new trip</h1>
            </div>
            <div style={{background:'#423F3E'}} >
              <input  value={placename} onChange={handlePlacenameChange} placeholder="Enter the city name" className='input-city'/>
              {/* <input type="text" placeholder='Enter city name'  /> */}
            </div>
            <br />
            <div style={{background:'#423F3E'}} >
              <button onClick={handleStartplanning} className='search-booking'  >Start Planning</button>
              {/* <button >Search for bookings</button>         */}
            </div>
          </div>
        </div>
        
        
      </>
    );
  }
}