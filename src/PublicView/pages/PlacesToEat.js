import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyRestaurants } from "../../shared/apis/apiService";
import PlacesToEatList from "../components/PlacesToEatList";
import Button from "../../shared/components/FormElements/Button";

import "./styles/PlacesToEat.css";

const PlacesToEat = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();
    const keyworkForPlace = "resturants";

    useEffect(() => {
        if (location) {
          const findNearbyRestaurants = async () => {
            try {
              const places = await fetchNearbyRestaurants(location.latitude, location.longitude, keyworkForPlace);
              setPlacesData(places);
            } catch (error) {
              console.log(error);
            }
          };
    
          findNearbyRestaurants();
        }
      }, [location]);
    
    return (
        <div className="eat-container">
            <div className="eat-heading">
              <h1>PLACES TO EAT</h1>
              <Button >FILTER</Button>
            </div>
            {
                placesData !== null ? <PlacesToEatList resturants={placesData}/> : <p className="eat-loading">Loading Resturants...</p>
            }
        </div>
    )
}

export default PlacesToEat;