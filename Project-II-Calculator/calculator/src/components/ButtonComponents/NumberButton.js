import React from 'react';
import './Button.css';

export default ({ text, buttonStyles }) => (
  <button className={buttonStyles}>{text}</button>
);