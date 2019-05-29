import React from 'react';
import Number from './NumberButton';
import Action from './ActionButton';
import './Button.css';

export default () => (
  <div className='button-container'>
    <Number />
    <Action />
  </div>
);
