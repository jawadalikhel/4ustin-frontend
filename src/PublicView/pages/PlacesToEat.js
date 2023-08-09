import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyRestaurants } from "../../shared/apis/apiService";
import PlacesToEatList from "../components/PlacesList";
import Button from "../../shared/components/FormElements/Button";
import FilterModal from "../../shared/components/UIElements/FilterModal";

import "./Styles/PlacesToEat.css";

const PlacesToEat = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();

    // Using the React Hook "useState" to create two state variables: "showMap" and "showConfirmModal"
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const queryFor = "resturants";
    const cityName = "austin";

    // Handler function to open the map modal
    const openMapHandler = () =>{
        setShowMap(true);
    }

    // Handler function to close the map modal
    const closeMapHandler = () =>{
        setShowMap(false);
    }

    // Handler function to show the delete confirmation modal
    const showDeleteWarningHandler = () =>{
        setShowConfirmModal(true);
    }

    // Handler function to cancel the delete action and hide the confirmation modal
    const cancelDeleteHandler = () =>{
        setShowConfirmModal(false);
    }

    // Handler function to confirm the delete action, hide the confirmation modal, and...
    const confirmDeleteHandler = () =>{
        setShowConfirmModal(false);
        console.log("DELETING")
    }


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
        <React.Fragment>
           <FilterModal 
                // show={showMap} 
                onClick={closeMapHandler} 
                // header={props.address} 
                contentClass="place-item__modal-content" 
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button onClick={closeMapHandler}>CLOSE</Button>
                        <Button>+ FAVORITE</Button>
                    </React.Fragment>
                }
            >
            </FilterModal>
          <div className="eat-container">
                          {/* Modal for displaying the map */}
           
              <div className="eat-heading">
                <h1>PLACES TO EAT</h1>
                <Button inverse onClick={openMapHandler}>FILTER</Button>
              </div>
              {
                  placesData !== null ? <PlacesToEatList resturants={placesData}/> : <p className="eat-loading">Loading...</p>
              }
          </div>
        </React.Fragment>
    )
}

export default PlacesToEat;