import React from "react";
import SavedPlansList from "./SavedPlansList";

const DUMMUY_DATA = [
    {
        title: "Summer 2024 Vacation",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
       
    },
    {
        title: "3 Day Weekend",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",

    },
    {
        title: "Bachelor Party",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
    },
    {
        title: "2 Week Vacation",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",

    },
    {
        title: "Summer 2024 Vacation",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
       
    },
    {
        title: "3 Day Weekend",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",

    },
    {
        title: "Bachelor Party",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",
    },
    {
        title: "2 Week Vacation",
        photo: "AUacShjCg0rN84dA1SxSvAyI9BpkXEC77KqQwvgYjF6XH0hfYikplMdqc5WBgCHlALj6AlX_aXIQEOhY1ErHbB0hw7KIlrXd4tPib-b4lSwGw7LodkRH7JiHuzBjDiDCguooL9b46uCrprrpi716l0nAAFzt33rqRn6fU3VREitS9lltBrr7",

    },
]
const savedPlans = () =>{
    return(
        <div>
            <h1>My Plans</h1>
            <SavedPlansList placesData={DUMMUY_DATA} />
        </div>
    )
}

export default savedPlans;