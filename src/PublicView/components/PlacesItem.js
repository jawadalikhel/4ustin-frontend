// Importing necessary modules from React and custom components
import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import {AuthContext} from "../../shared/context/auth-context";

// Importing CSS styles for the component
import "./Styles/PlacesItem.css"
const GOOGLE_API = process.env.REACT_APP_GOOGLE_PLACES;

//component "PlaceItem" takes props as input
const PlaceItem = (props) =>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    // Using the React Hook "useState" to create two state variables: "showMap" and "showConfirmModal"
    const [showMap, setShowMap] = useState(false);

    // Handler function to open the map modal
    const openMapHandler = () =>{
        setShowMap(true);
    }

    // Handler function to close the map modal
    const closeMapHandler = () =>{
        setShowMap(false);
    }

    const addToFavoriteHandler = () =>{
        if(!auth.isLoggedIn){
            if(window.confirm("You Need to login to Add to Favorites")){
                navigate("/auth");
            }            
        }
        alert("Place Added To Your Favorites")
    }

    // The component's JSX code starts here
    return(
        <React.Fragment>
            {/* Modal for displaying the map */}
            <Modal 
                show={showMap} 
                onClick={closeMapHandler} 
                header={props.address} 
                contentClass="place-item__modal-content" 
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button onClick={closeMapHandler}>CLOSE</Button>
                        <Button onClick={addToFavoriteHandler}>+ FAVORITE</Button>
                    </React.Fragment>
                }
            >
                <div className="map-container">
                    {/* Displaying the map using the Map component with the coordinates provided */}
                    <Map center={props.location} zoom={17}/>
                </div>
            </Modal>

            {/* The main content of the component */}
            <li className="place-flex-item" key={props.id}>
                <div className="place-card">
                <div className="place-flex--item_image">
                    <img
                    src={
                        props.photo
                        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photo}&key=${GOOGLE_API}`
                        : null
                    }
                    alt={props.name}
                    />
                </div>
                <div className="place-item_info">
                    <h2>{props.name}</h2>
                    <h3>
                    {props.Rating}&#9734; ({props.userRatingTotal})
                    </h3>
                </div>
                <div className="place-item_actions">
                    <Button inverse onClick={openMapHandler}>
                    VIEW IN MAP
                    </Button>
                </div>
                </div>
            </li>
            
        </React.Fragment>
    )
}

// Exporting the component to be used in other parts of the application
export default PlaceItem;