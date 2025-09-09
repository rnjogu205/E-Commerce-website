import React from 'react';
import './Model.css';
import background2 from '../assets/2background.jpg'


const Model = () => {
  return (
    <div className="model" style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        }}>

      <div className="model-container">
        <div className="model-left">
          <h2>NEW ARRIVALS</h2>
          <p>Discover our latest collection of fashion essentials.</p>
        </div>
      </div>
    </div>
  );
};

export default Model;