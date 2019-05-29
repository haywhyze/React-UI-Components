import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => (
  <div className='card-container'>
    <CardBanner 
      bgColor='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'
      />
    <CardContent 
      heading='Get Started with React' 
      text='React makes it painless to create interactive UIs. Design simple views for each state in your application'
      link='reactjs.org'
      />
  </div>
);

export default CardContainer;