import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import {CITY_NAME} from "../../shared/resources/placeHolderDatas/PlacesQueryData";
import PlacesList from "../components/PlacesList";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./Styles/AllPlacesStyle.css";

const ThingsToDo = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();

    const [selectedQueryFor, setSelectedQueryFor] = useState("things to do");

    useEffect(() => {
        if (location) {
          const findNearbyThingsToDo = async () => {
            try {
              const places = await fetchNearbyPlaces(location.latitude, location.longitude, selectedQueryFor, CITY_NAME);
              setPlacesData(places);
            } catch (error) {
              console.log(error);
            }
          };
    
          findNearbyThingsToDo();
        }
      }, [location, selectedQueryFor]);
    
    return (
        <div className="place-container">
            <div className="place-heading">
              <h1>Things To Do</h1>
            </div>
            {
                placesData !== null ? <PlacesList placesData={placesData}/> : <LoadingSpinner asOverlay={true} />
            }
        </div>
    )
}

export default ThingsToDo;