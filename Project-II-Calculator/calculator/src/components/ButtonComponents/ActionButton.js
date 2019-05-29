import React from 'react';
import './Button.css';

const boldText = {
  fontWeight: '700'
}
const lightText = {
  fontWeight: '300'
}

export default ({ text, buttonStyles, bold }) => (
  <button className={buttonStyles} style={bold ? boldText: lightText} >{text}</button>
);