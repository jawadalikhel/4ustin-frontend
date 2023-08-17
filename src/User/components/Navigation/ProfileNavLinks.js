import { NavLink } from "react-router-dom";

import "./Styles/ProfileNavLinks.css"
const ProfileNavLinks = ({handleOptionSelect}) =>{
    return(
        <ul className="profile-nav-links">
            <li>
                <button onClick={() => handleOptionSelect("myFavorites")}>MY FAVORITES</button>
            </li>

            <li>
                <button onClick={() => handleOptionSelect("customizedPlans")}>CUSTOMIZED PLANS</button>
            </li>

            <li>
                <button onClick={() => handleOptionSelect("tripPlanner")}>TRIP PLANNER</button>
            </li>

            <li>
                <button onClick={() => handleOptionSelect("map")}>MAP</button>
            </li>

            <li>
                <button onClick={() => handleOptionSelect("weather")}>WEATHER</button>
            </li>

            <li>
                <button onClick={() => handleOptionSelect("collaborate")}>COLLABORATE</button>
            </li>

            <li>
                <button onClick={() => handleOptionSelect("buget-expenses")}>BUDGET/EXPENSES</button>
            </li>
        </ul>
    )
}

export default ProfileNavLinks;