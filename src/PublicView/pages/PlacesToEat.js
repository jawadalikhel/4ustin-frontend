import React, { useState, useEffect } from "react";
import axios from 'axios';
import FullScreenWeightBox from "../../shared/components/UIElements/FullScreenWeightBox";

import "./styles/PlacesToEat.css";

const PlacesToEat = () =>{
    const [placesData, setPlacesData] = useState([]);

    useEffect(() => {
        var config = {
            method: 'get',
            url: '/nearbysearch/json?keyword=restaurants&location=30.2152826%2C-97.9505233&radius=1500&key=AIzaSyDFbEN9gh-kB68Qz8hgM_YXU3m0XX84hkk',
            headers: { },
        };
        
        axios(config)
        .then((response) => {
            const extractedData = response.data.results.map(place => ({
                name: place.name,
                photo: place.photos && place.photos.length > 0 ? place.photos[0].photo_reference : null,
                rating: place.rating,
                userRatingTotal: place.user_ratings_total,
                vicinity: place.vicinity,
            }));
            setPlacesData(extractedData); // Set the extracted data in the state
        })
        .catch(function (error) {
            console.log(error);
        });
      }, []);      

    return (
        <div className="eat-container">
            <h1 style={{textAlign: "center"}}>PLACES TO EAT</h1>
                {placesData.map((place, index) => (
                    <FullScreenWeightBox url={place.url} image={place.photo ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photo}&key=AIzaSyDFbEN9gh-kB68Qz8hgM_YXU3m0XX84hkk` : null}>
                        <h3>{place.name}</h3>
                        <p>Rating: {place.rating}({place.userRatingTotal})</p>
                        <p>Address: {place.vicinity}</p>
                    </FullScreenWeightBox>
                ))}
        </div>
    )
}

export default PlacesToEat;