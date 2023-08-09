import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyRestaurants } from "../../shared/apis/apiService";
import PlacesToEatList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";

import "./Styles/PlacesToEat.css";

const ShopLocal = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();
    const queryFor = "shop";
    const cityName = "austin";

    useEffect(() => {
        if (location) {
          const findNearbyRestaurants = async () => {
            try {
              const places = await fetchNearbyRestaurants(location.latitude, location.longitude, queryFor, cityName);
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
              <h1>Shop Local</h1>
              <Button >FILTER</Button>
            </div>
            {
                placesData !== null ? <PlacesToEatList resturants={placesData}/> : <p className="eat-loading">Loading...</p>
            }
        </div>
    )
}

export default ShopLocal;