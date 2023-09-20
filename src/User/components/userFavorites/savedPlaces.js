import React, {useEffect, useContext, useState} from "react";
import {useParams} from 'react-router-dom';
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";

import { useHttpClient } from "../../../shared/hooks/http-hook";
import SavedPlacesList from "./SavedPlacesList";

const SavedPlaces = () =>{
    const [loadedPlaces, setLoadedPlaces] = useState([]);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const userId = useParams().userId;

    useEffect(() => {
        const fetchUserFavoritePlaces = async () => {
          try {
            const responseData = await sendRequest(
              `http://localhost:5000/api/favorites/user/userFavoritePlaces/${userId}`
            );
            setLoadedPlaces(responseData.favoritePlaces);
          } catch (error) {
            console.log(error, "<------- Error");
          }
        };
        fetchUserFavoritePlaces();
      }, [sendRequest, userId]);

      const placeDeletedHandler = (deletedPlaceId) =>{
        setLoadedPlaces(prevPlaces => prevPlaces.filter(place => place.id !== deletedPlaceId))
      }

    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            
            {isLoading ? (
                <div className="center">
                    <LoadingSpinner />
                </div>
            ) : null}
            {!isLoading && loadedPlaces ? (
                <div>
                    <h1>My Favorite Places</h1>
                    <SavedPlacesList placesData={loadedPlaces} onDeletePlace={placeDeletedHandler} />
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default SavedPlaces;