import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import useFilterModalHook from "../../shared/hooks/useFilterModalHook";
import {CITY_NAME, PLACESTOEAT_CATEGORY_NAMES, AUSTINITE_INFO} from "../../shared/resources/placeHolderDatas/PlacesQueryData";

import "./Styles/AllPlacesStyle.css";



const Austinite = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();

    // Using the React Hook "useState" to create  state variables "showConfirmModal"
    const [selectedQueryFor, setSelectedQueryFor] = useState("visit like an austinite");

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
      }, [location, selectedQueryFor, CITY_NAME]);
    
    return (
        <React.Fragment>
          <div className="place-container">           
              <div className="">
                <h1>Visit Like An Austinite</h1>
                {
                    AUSTINITE_INFO.map((austinite) =>{
                        // console.log(austinite.content)
                        return(
                            <div key={austinite.title}>
                                <h4>{austinite.title}</h4>
                                <p>{austinite.content !== "" ? austinite.content : null}</p>
                            </div>
                        )
                    })
                }
                <h2 style={{"borderBottom": "2px solid #5CA6FD", "textAlign": "center"}}>Developer's Favorites:</h2>
              </div>
              {
                  placesData !== null ? <PlacesList placesData={placesData}/> : <p className="place-loading">Loading...</p>
              }
          </div>
        </React.Fragment>
    )
}

export default Austinite;