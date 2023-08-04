import React from 'react';
import headerImage from "./images/atx2.jpeg";

import "./Styles/Header.css";

function Header() {
  return (
    <div className="header-image">
      <img src={headerImage} alt="Header" />
    </div>
  );
}

export default Header;