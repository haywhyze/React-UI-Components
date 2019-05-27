import React from 'react';
import './Header.css';
import moment from 'moment';

const timestamp = moment().format('DD MMM')

const HeaderTitle = ({ text, handle }) => (
  <div className='header-title'>
    <h4>{text}</h4>
    <p>{handle}</p>
    <p>{timestamp}</p>
  </div>
);

export default HeaderTitle;
