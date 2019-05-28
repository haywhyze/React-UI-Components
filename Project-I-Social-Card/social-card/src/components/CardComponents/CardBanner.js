import React from 'react';
import './Card.css';

const CardBanner = ({ bgColor }) => (
  <div className='card-banner' style={{ backgroundImage: `url(${bgColor})` }}>

  </div>
);

export default CardBanner;