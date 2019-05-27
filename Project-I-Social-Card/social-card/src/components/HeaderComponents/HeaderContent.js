import React from 'react';
import './Header.css';

const HeaderContent = ({ text }) => (
  <div className='header-title'>
    <p>{text}</p>
  </div>
);

export default HeaderContent;
