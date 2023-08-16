import React from "react";
import Card from "../../../shared/components/UIElements/Card";
import SavedPlacesItem from "./SavedPlansItem";

// import "../Styles/SavedPlacesList.css";

const SavedPlansList = (props) =>{
    // If the "items" prop is an empty array, display a message and a button to create a new place
    if(props.placesData.length === 0){
        return(
            <div className="place-list center">
                <Card>
                    <h2>No Data Found.</h2>
                </Card>
            </div>
        )
    }

    // If "items" prop contains one or more elements, display the list of places
    return(
        <ul className="scroll-container">
            {
                // Looping through each place item in the "items" array and rendering a PlaceItem component for each one
                props.placesData.map((plan) =>{
                    return (
                        <SavedPlacesItem 
                            title={plan.title}
                            photo = {plan.photo}
                        />                        
                    )
                })
            }
        </ul>
    )
}

export default SavedPlansList;
