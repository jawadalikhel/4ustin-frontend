// SubmitPicturesBox.js
import React from 'react';
import { Link } from 'react-router-dom';

import "./Styles/FullScreenWeightBox.css";

const FullScreenWeightBox = (props) => {
  console.log(props, "<---- ")
  return (
    <Link to={`/${props.url}`} className="submit-pictures-box" style={props.boxStyles ? {height: props.boxStyles.height} : null}>
        {props.image ? <img src={props.image} alt="Submit Pictures" /> : null}
        <div className="content">
          {props.children}
        </div>
    </Link>  
  );
}

export default FullScreenWeightBox;