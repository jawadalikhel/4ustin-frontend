import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesToEatList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import useFilterModalHook from "../../shared/hooks/useFilterModalHook";
import {CITY_NAME, OUTDOORS_CATEGORY_NAMES} from "../../shared/resources/placeHolderDatas/PlacesQueryData";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./Styles/AllPlacesStyle.css";

const Outdoors = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();
    const [selectedQueryFor, setSelectedQueryFor] = useState("outdoors");

    const handleCategorySelect = category =>{
      setSelectedQueryFor(category);
      closeFilterHandler();
    }
    
    const {openFilterHandler, closeFilterHandler, FilterModalComponent} = useFilterModalHook(OUTDOORS_CATEGORY_NAMES, handleCategorySelect);

    useEffect(() => {
        if (location) {
          const findNearbyOutdoors = async () => {
            try {
              const places = await fetchNearbyPlaces(location.latitude, location.longitude, selectedQueryFor, CITY_NAME);
              setPlacesData(places);
            } catch (error) {
              console.log(error);
            }
          };
    
          findNearbyOutdoors();
        }
      }, [location, selectedQueryFor]);
    
    return (
        <div className="place-container">
            <div className="place-heading">
              <h1>Outdoors</h1>
              <Button inverse onClick={openFilterHandler}>FILTER</Button>
              {FilterModalComponent}
            </div>
            {
                placesData !== null ? <PlacesToEatList placesData={placesData}/> : <LoadingSpinner asOverlay={true} />
            }
        </div>
    )
}

export default Outdoors;