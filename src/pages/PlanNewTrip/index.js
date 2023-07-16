import React, { useState } from 'react';
import './style.css';
import {Navigate } from 'react-router-dom';

export default function PlanNewTrip(props) {

  // const history = useHistory();
  const [placename, setPlacename] = useState('');
  const handleStartplanning = () => {
    if (placename === 'taj') {
      props.setStartPlanning(placename);
      
  }};

  const handlePlacenameChange = (e) => {
    setPlacename(e.target.value);
  };

  if (props.startPlanning) {
    // return history.push('/startplanning');
    return <Navigate to="/startplanning" target="_blank" />
  } else {
    return (
      <>
        <input  value={placename} onChange={handlePlacenameChange} placeholder="enter the city name"/>
        <button onClick={handleStartplanning}>Start Planning</button>        
      </>
    );
  }
}