import React from 'react';
import './Parts.css';
import img from '../assets/img.png'; // mets ici ton image de voiture

import { FaOilCan, FaBurn, FaCarBattery, FaVolumeUp, FaLightbulb, FaFilter} from "react-icons/fa";
import {  GiCarWheel, GiSparkPlug } from "react-icons/gi";

const parts = [
  { name: 'Engine Oil', icon: <FaOilCan /> },
  { name: 'Other Fuel', icon: <FaBurn /> },
  { name: 'Battery', icon: <FaCarBattery /> },
  { name: 'Air Filters', icon: <FaFilter /> },
  { name: 'Speakers', icon: <FaVolumeUp /> },
  { name: 'Lights', icon: <FaLightbulb /> },
  { name: 'Tyres', icon: <GiCarWheel /> },
  { name: 'Spark Plugs', icon: <GiSparkPlug /> },
];


function Parts() {
  return (
    <div className="car-parts-container">
      <h1>CAR PARTS</h1>
      <p>Pick Any Single Part of Car!</p>
      <div className="car-parts-content">
        <div className="parts-list left">
          {parts.slice(0, 4).map((part) => (
            <div className="part" key={part.name}>
              <span className="icon">{part.icon}</span>
              <span>{part.name}</span>
            </div>
          ))}
        </div>
        <div className="car-image">
          <img src={img} alt="Car" />
        </div>
        <div className="parts-list right">
          {parts.slice(4).map((part) => (
            <div className="part" key={part.name}>
              <span>{part.name}</span>
              <span className="icon">{part.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Parts;
