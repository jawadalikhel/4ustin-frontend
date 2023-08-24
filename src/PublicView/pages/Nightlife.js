import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesToEatList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import useFilterModalHook from "../../shared/hooks/useFilterModalHook";
import {CITY_NAME, NIGHTLIFE_CATEGORY_NAMES} from "../../shared/resources/placeHolderDatas/PlacesQueryData";


import "./Styles/AllPlacesStyle.css";

const Nightlife = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();

    const [selectedQueryFor, setSelectedQueryFor] = useState("nightlife");

    const handleCategorySelect = category =>{
      setSelectedQueryFor(category);
      closeFilterHandler();
    }
    
    const {openFilterHandler, closeFilterHandler, FilterModalComponent} = useFilterModalHook(NIGHTLIFE_CATEGORY_NAMES, handleCategorySelect);

    useEffect(() => {
        if (location) {
          const findNearbyNightlifePlaces = async () => {
            try {
              const places = await fetchNearbyPlaces(location.latitude, location.longitude, selectedQueryFor, CITY_NAME);
              setPlacesData(places);
            } catch (error) {
              console.log(error);
            }
          };
    
          findNearbyNightlifePlaces();
        }
      }, [location, selectedQueryFor]);
    
    return (
        <div className="place-container">
            <div className="place-heading">
              <h1>NIGHTLIFE PLACES</h1>
              <Button inverse onClick={openFilterHandler}>FILTER</Button>
              {FilterModalComponent}
            </div>
            {
                placesData !== null ? <PlacesToEatList placesData={placesData}/> : <p className="place-loading">Loading...</p>
            }
        </div>
    )
}

export default Nightlife;