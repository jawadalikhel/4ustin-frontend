import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesToEatList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import FilterModal from "../../shared/components/UIElements/FilterModal";

import "./Styles/AllPlacesStyle.css";
const CATEGORY_NAMES = ["Local News","Sports", "Austin 360"];

const News = () =>{    
    const [news, setNews] = useState(null)
    return (
        <div className="place-container">

            <div className="place-heading">
              <h1>Austin News</h1>
              <Button>FILTER</Button>
            </div>
            {
                news !== null ? {news} : <p className="place-loading">COMMING SOON...</p>
            }
        </div>
    )
}

export default News;