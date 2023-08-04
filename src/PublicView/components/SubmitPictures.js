// SubmitPicturesBox.js
import React from 'react';
import submitPicturesImage from './images/atx2.jpeg';

import "./Styles/SubmitPictures.css";

function SubmitPictures() {
  return (
    <div className="submit-pictures-box">
        <img src={submitPicturesImage} alt="Submit Pictures" />
        <div className="content">
        <h1>SUBMIT YOUR PICTURES</h1>
        <p>Share the sights and sounds of your experience!</p>
        </div>
    </div>  
  );
}

export default SubmitPictures;