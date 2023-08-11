import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesToEatList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import FilterModal from "../../shared/components/UIElements/FilterModal";

import "./Styles/AllPlacesStyle.css";

const SubmitPictures = () =>{    
    const [pictures, setNews] = useState(null)
    return (
        <div className="eat-container">

            <div className="eat-heading">
              <h1>Submit Your Pictures</h1>
              <Button>FILTER</Button>
            </div>
            {
                pictures !== null ? {pictures} : <p className="eat-loading">COMMING SOON...</p>
            }
        </div>
    )
}

export default SubmitPictures;