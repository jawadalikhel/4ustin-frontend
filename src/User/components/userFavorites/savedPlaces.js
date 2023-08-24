import React from "react";
import SavedPlacesList from "./SavedPlacesList";

const DUMMY_DATA = [
    {
        name: "Salty Sow",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
        rating: 4.6,
        userRatigTotal: 2698,
        id: "001",
        address: "1100 E Oltorf St"
    },
    {
        name: "Salty Sow",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
        rating: 4.6,
        userRatigTotal: 2698,
        id: "002",
        address: "1100 E Oltorf St"
    },
    {
        name: "Salty Sow",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
        rating: 4.6,
        userRatigTotal: 2698,
        id: "003",
        address: "1100 E Oltorf St"
    },
    {
        name: "Salty Sow",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
        rating: 4.6,
        userRatigTotal: 2698,
        id: "004",
        address: "1100 E Oltorf St"
    },
    {
        name: "Salty Sow",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
        rating: 4.6,
        userRatigTotal: 2698,
        id: "005",
        address: "1100 E Oltorf St"
    },
    {
        name: "Salty Sow",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
        rating: 4.6,
        userRatigTotal: 2698,
        id: "003",
        address: "1100 E Oltorf St"
    },
    {
        name: "Salty Sow",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
        rating: 4.6,
        userRatigTotal: 2698,
        id: "004",
        address: "1100 E Oltorf St"
    },
    {
        name: "Salty Sow",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
        rating: 4.6,
        userRatigTotal: 2698,
        id: "005",
        address: "1100 E Oltorf St"
    }
]
const SavedPlaces = () =>{
    return(
        <div>
            <h1>My Favorite Places</h1>
            <SavedPlacesList placesData={DUMMY_DATA} />
        </div>
    )
}

export default SavedPlaces;