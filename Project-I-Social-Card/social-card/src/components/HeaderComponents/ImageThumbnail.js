import React from 'react';
import './Header.css';

const ImageThumbnail = ({ src, alt }) => (
  <div className='image-thumbnail'>
    <img
      src={src}
      alt={alt}
    />
  </div>
);

export default ImageThumbnail;
