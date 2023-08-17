import React from "react";
import SavedPlaces from "./userFavorites/SavedPlaces";
import SavedPlans from "./userPlans/SavedPlans";

const MyFavorites = () =>{
    return(
        <div>
            <SavedPlaces />

            <SavedPlans />
        </div>
    )
}

export default MyFavorites;