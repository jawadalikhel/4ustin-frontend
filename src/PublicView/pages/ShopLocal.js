import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import useFilterModalHook from "../../shared/hooks/useFilterModalHook";
import {CITY_NAME, SHOPLOCAL_CATEGORY_NAMES} from "../../shared/resources/placeHolderDatas/PlacesQueryData";

import "./Styles/AllPlacesStyle.css";

const ShopLocal = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();

    const [selectedQueryFor, setSelectedQueryFor] = useState("local shop");

    const handleCategorySelect = category =>{
      setSelectedQueryFor(category);
      closeFilterHandler();
    }
    
    const {openFilterHandler, closeFilterHandler, FilterModalComponent} = useFilterModalHook(SHOPLOCAL_CATEGORY_NAMES, handleCategorySelect);

    useEffect(() => {
        if (location) {
          const findNearbyLocalShops = async () => {
            try {
              const places = await fetchNearbyPlaces(location.latitude, location.longitude, selectedQueryFor, CITY_NAME);
              setPlacesData(places);
            } catch (error) {
              console.log(error);
            }
          };
    
          findNearbyLocalShops();
        }
      }, [location, selectedQueryFor]);
    
    return (
        <div className="place-container">
            <div className="place-heading">
                <h1>SHOP LOCAL</h1>
                <Button inverse onClick={openFilterHandler}>FILTER</Button>
                {FilterModalComponent}
            </div>
            {
                placesData !== null ? <PlacesList placesData={placesData}/> : <p className="place-loading">Loading...</p>
            }
        </div>
    )
}

export default ShopLocal;