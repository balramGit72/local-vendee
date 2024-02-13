import React from 'react';
import './ImageWithText.css'; // Import CSS for styling

const ImageWithText = ({ name }) => {
  return (
    <div className="image-container">
      <div className="overlay">{name[0]}</div>
    </div>
  );
};

export default ImageWithText;
