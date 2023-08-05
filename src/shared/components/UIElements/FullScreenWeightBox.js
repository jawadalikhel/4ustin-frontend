// SubmitPicturesBox.js
import React from 'react';
import { Link } from 'react-router-dom';

import "./Styles/FullScreenWeightBox.css";

const SubmitPictures = ({data}) => {
  return (
    <Link to={`/${data.url}`} className="submit-pictures-box" style={data.boxStyles ? {height: data.boxStyles.height} : null}>
        {data.image ? <img src={data.image} alt="Submit Pictures" /> : null}
        <div className="content">
          <h1>{data.title}</h1>
          <p>{data.description ? data.description : null}</p>
        </div>
    </Link>  
  );
}

export default SubmitPictures;