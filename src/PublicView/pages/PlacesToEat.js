import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import useFilterModalHook from "../../shared/hooks/useFilterModalHook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import {CITY_NAME, PLACESTOEAT_CATEGORY_NAMES} from "../../shared/resources/placeHolderDatas/PlacesQueryData";

import "./Styles/AllPlacesStyle.css";

const PlacesToEat = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();

    // Using the React Hook "useState" to create  state variables "showConfirmModal"
    const [selectedQueryFor, setSelectedQueryFor] = useState("resturants");

    const handleCategorySelect = category =>{
      setSelectedQueryFor(category);
      closeFilterHandler();
    }
    
    const {openFilterHandler, closeFilterHandler, FilterModalComponent} = useFilterModalHook(PLACESTOEAT_CATEGORY_NAMES, handleCategorySelect);

    useEffect(() => {
        if (location) {
          const findNearbyRestaurants = async () => {
            try {
              const places = await fetchNearbyPlaces(location.latitude, location.longitude, selectedQueryFor, CITY_NAME);
              setPlacesData(places);
            } catch (error) {
              console.log(error);
            }
          };
    
          findNearbyRestaurants();
        }
      }, [location, selectedQueryFor]);
    
    return (
        <React.Fragment>
          <div className="place-container">           
              <div className="place-heading">
                <h1>PLACES TO EAT</h1>
                <Button inverse onClick={openFilterHandler}>FILTER</Button>
                {FilterModalComponent}
              </div>
              {
                  placesData !== null ? <PlacesList placesData={placesData}/> : <LoadingSpinner asOverlay={true} />
              }
          </div>
        </React.Fragment>
    )
}

export default PlacesToEat;