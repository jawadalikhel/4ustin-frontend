import React from 'react';
import { Link } from "react-router-dom";
import './Styles/Box.css'; // Create this CSS file to style the box

const Box = (props) => {
  return (
    
      // <div >
        <Link to={`/${props.url}`} className="box">
          <img src={props.imageSrc} alt={props.title} />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </Link>
      // </div>
  );
};

export default Box;
