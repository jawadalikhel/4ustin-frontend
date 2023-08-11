import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesToEatList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import FilterModal from "../../shared/components/UIElements/FilterModal";

import "./Styles/AllPlacesStyle.css";


const CATEGORY_NAMES = ["RESTURANTS", "VEGETARIAN", "SMOOTHIES", "STEAKHOUSES", "BBQ", "MEXIAN & TEX-MEX", "FOOD TRAILERS!", "INDIAN", "ASIAN/SUSHI", "BREAKFAST", "BRUNCH", "ITALIAN/PIZZA"];

const PlacesToEat = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();

    // Using the React Hook "useState" to create two state variables: "showFilter" and "showConfirmModal"
    const [showFilter, setShowFilter] = useState(false);
    const [selectedQueryFor, setSelectedQueryFor] = useState("resturants");


    // const queryFor = "resturants";
    const cityName = "austin";

    // Handler function to open the map modal
    const openFilterHandler = () =>{
        setShowFilter(true);
    }

    // Handler function to close the map modal
    const closeFilterHandler = () =>{
        setShowFilter(false);
    }

    const handleCategorySelect = category =>{
      setSelectedQueryFor(category);
      closeFilterHandler();
    }

    useEffect(() => {
        if (location) {
          const findNearbyRestaurants = async () => {
            try {
              const places = await fetchNearbyPlaces(location.latitude, location.longitude, selectedQueryFor, cityName);
              setPlacesData(places);
            } catch (error) {
              console.log(error);
            }
          };
    
          findNearbyRestaurants();
        }
      }, [location, selectedQueryFor, cityName]);
    
    return (
        <React.Fragment>
           <FilterModal 
                show={showFilter} 
                onClick={closeFilterHandler} 
                contentClass="place-item__modal-content" 
                footerClass="place-item__modal-actions"
                // header = "Category"
                footer={
                    <React.Fragment>
                        <Button onClick={closeFilterHandler}>CLOSE</Button>
                    </React.Fragment>
                }
                categoryInfo={CATEGORY_NAMES}
                onCategorySelect = {handleCategorySelect}
            />

          <div className="place-container">           
              <div className="place-heading">
                <h1>PLACES TO EAT</h1>
                <Button inverse onClick={openFilterHandler}>FILTER</Button>
              </div>
              {
                  placesData !== null ? <PlacesToEatList resturants={placesData}/> : <p className="place-loading">Loading...</p>
              }
          </div>
        </React.Fragment>
    )
}

export default PlacesToEat;