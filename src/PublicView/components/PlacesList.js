import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlacesItem from "./PlacesItem";

import "./Styles/PlacesList.css";

const PlaceToEatList = (props) =>{
    // If the "items" prop is an empty array, display a message and a button to create a new place
    if(props.resturants.length === 0){
        return(
            <div className="place-list center">
                <Card>
                    <h2>No Resturants Found.</h2>
                </Card>
            </div>
        )
    }

    // If "items" prop contains one or more elements, display the list of places
    return(
        <ul className="places-flex-container">
            {
                // Looping through each place item in the "items" array and rendering a PlaceItem component for each one
                props.resturants.map((resturant) =>{
                    return (
                        <PlacesItem 
                            name={resturant.name}
                            photo = {resturant.photo}
                            Rating = {resturant.rating}
                            userRatingTotal ={resturant.userRatingTotal}
                            location = {resturant.location}
                            key={resturant.id} 
                            address={resturant.address}
                        />                        
                    )
                })
            }
        </ul>
    )
}

export default PlaceToEatList;
