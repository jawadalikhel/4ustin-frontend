import React, { useState, useEffect } from "react";
import axios from 'axios';
import FullScreenWeightBox from "../../shared/components/UIElements/FullScreenWeightBox";

import "./styles/PlacesToEat.css";

const PlacesToEat = () =>{
    const [placesData, setPlacesData] = useState([]);
    // const [userLocation, setUserLocation] = useState({ lat: null, lon: null });
    const [loading, setLoading] = useState(true);

    const getUserGeoLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
        } else {
          console.log("Geolocation not supported");
        }
      }
    
      const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // setUserLocation({ latitude, longitude });

        var config = {
            method: 'get',
            url: `/nearbysearch/json?keyword=resturants&location=${latitude}%2C${longitude}&radius=2000&key=AIzaSyDFbEN9gh-kB68Qz8hgM_YXU3m0XX84hkk`,
            headers: { },
        };
    
        // Make API call
        axios(config)
        .then(response => {
            const extractedData = response.data.results.map(place => ({
                id: place.place_id,
                name: place.name,
                photo: place.photos && place.photos.length > 0 ? place.photos[0].photo_reference : null,
                rating: place.rating,
                userRatingTotal: place.user_ratings_total,
                vicinity: place.vicinity,
            }));
            const filterResturantByRating = extractedData.filter((place) => place.rating >= 3.5 && place.userRatingTotal >= 5);
            setPlacesData(filterResturantByRating);

        })
        .catch(error => console.log(error));
      }
    
      function error() {
        console.log("Unable to retrieve your location");
      }

    useEffect(() => {
        getUserGeoLocation();
      }, []);      

    return (
        <div className="eat-container">
            <h1 style={{textAlign: "center"}}>PLACES TO EAT</h1>
                {loading ? placesData.map((place, index) => (
                    <FullScreenWeightBox key={place.id} id={place.id} url={place.url} image={place.photo ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photo}&key=AIzaSyDFbEN9gh-kB68Qz8hgM_YXU3m0XX84hkk` : null}>
                        <h3>{place.name}</h3>
                        <p>Rating: {place.rating}({place.userRatingTotal})</p>
                        <p>Address: {place.vicinity}</p>
                    </FullScreenWeightBox>
                )) : <p>Loading Resturants...</p>}
        </div>
    )
}

export default PlacesToEat;