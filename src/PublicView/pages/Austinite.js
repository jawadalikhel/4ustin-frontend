import React, { useState, useEffect } from "react";
import geoLocationHook from "../../shared/hooks/geoLocationHook";
import { fetchNearbyPlaces } from "../../shared/apis/apiService";
import PlacesList from "../components/PlacesList";
import useFilterModalHook from "../../shared/hooks/useFilterModalHook";
import {CITY_NAME, PLACESTOEAT_CATEGORY_NAMES, AUSTINITE_INFO} from "../../shared/resources/placeHolderDatas/PlacesQueryData";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./Styles/AllPlacesStyle.css";



const Austinite = () =>{
    const [placesData, setPlacesData] = useState(null);
    const { location, error } = geoLocationHook();

    // Using the React Hook "useState" to create  state variables "showConfirmModal"
    const [selectedQueryFor, setSelectedQueryFor] = useState("visit like an austinite");

    const handleCategorySelect = category =>{
      setSelectedQueryFor(category);
      closeFilterHandler();
    }
    
    const {closeFilterHandler} = useFilterModalHook(PLACESTOEAT_CATEGORY_NAMES, handleCategorySelect);

    useEffect(() => {
        if (location) {
          const findNearbyPlaces = async () => {
            try {
              const places = await fetchNearbyPlaces(location.latitude, location.longitude, selectedQueryFor, CITY_NAME);
              setPlacesData(places);
            } catch (error) {
              console.log(error);
            }
          };
    
          findNearbyPlaces();
        }
      }, [location, selectedQueryFor]);
    
    return (
      <div className="place-container">           
          <div className="">
            {/* <h1>Welcome to GoATX!</h1> */}
            <div>
              <h1>{AUSTINITE_INFO.about.title}</h1>
              <p>{AUSTINITE_INFO.about.content}</p>
            </div>
            <div className="team-container">
            {
              AUSTINITE_INFO.team.map((member) =>{
                return(
                  <div key={member.name} className="team-member">
                    <img src={member.headshot} alt="member-headshop" />
                    <h2><bolder>{member.name}</bolder></h2>
                    <h3>{member.position}</h3>
                    <p>{member.background}</p>
                  </div>
                )
              })
            }
            </div>

            <div>
              <h1>{AUSTINITE_INFO.valueAndGoal.title}</h1>
              <p>{AUSTINITE_INFO.valueAndGoal.content}</p>
            </div>

            <h2 style={{"borderBottom": "2px solid #5CA6FD", "textAlign": "center"}}>Team's Favorites:</h2>
          </div>
          {
              placesData !== null ? <PlacesList placesData={placesData}/> : <LoadingSpinner asOverlay={true} />
          }
      </div>

    )
}

export default Austinite;

// {
//   AUSTINITE_INFO.map((austinite) =>{
//       return(
//           <div>
//             <div key={austinite.title}>
//               <h4>{austinite.title}</h4>
//               <p>{austinite.content !== "" ? austinite.content : null}</p>
//             </div>
//           </div>
//       )
//   })
// }