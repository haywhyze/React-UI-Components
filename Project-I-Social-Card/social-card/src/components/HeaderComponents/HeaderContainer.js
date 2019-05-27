import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => (
  <div>
    <ImageThumbnail 
      src='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png' 
      />

    <HeaderTitle 
      text='Lambda School' handle='LambdaSchool'
      />
  </div>
);

export default HeaderContainer;