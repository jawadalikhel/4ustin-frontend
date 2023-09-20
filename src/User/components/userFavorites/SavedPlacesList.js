import React from "react";
import Card from "../../../shared/components/UIElements/Card";
import SavedPlacesItem from "./SavedPlacesItem";

import "../Styles/SavedPlacesList.css";

const SavedPlacesList = (props) =>{

    //If the "items" prop is an empty array, display a message and a button to create a new place
    if(props.placesData.length === 0 || props.placesData === undefined){
        return(
            <div className="place-list center">
                    <p>No Favorite Places Found.</p>
            </div>
        )
    }

    // If "items" prop contains one or more elements, display the list of places
    return(
        <ul className="scroll-container">
            {
                // Looping through each place item in the "items" array and rendering a PlaceItem component for each one
                props.placesData.map((resturant) =>{
                    return (
                        <SavedPlacesItem 
                            key={resturant.id}
                            name={resturant.name}
                            photo = {resturant.photo}
                            Rating = {resturant.rating}
                            userRatingTotal ={resturant.userRatingTotal}
                            coordinates = {resturant.coordinates}
                            id={resturant.id} 
                            address={resturant.address}
                            onDelete={props.onDeletePlace}
                        />                        
                    )
                })
            }
        </ul>
    )
}

export default SavedPlacesList;
