import React from 'react';
import './Card.css';

const CardContent = ({ heading, text, link }) => (
  <div className='card-content'>
    <h4>{heading}</h4>
    <p>{text}</p>
    <p className='link'>{link}</p>
  </div>
);

export default CardContent;