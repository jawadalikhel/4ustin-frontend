import React from "react";
import { NavLink } from "react-router-dom";

import "./Styles/ProfileNavLinks.css";

const ProfileNavLinks = () =>{
    return(
        <ul className="profile-nav-links">
            {/* The "NavLink" component is a special version of the "Link" component from "react-router-dom" */}
            {/* It automatically applies the "active" class to the link when the current URL matches the "to" prop */}
            <li>
                <NavLink to="/">MY FAVORITES</NavLink>
            </li>

            <li>
                <NavLink to="/">CUSTOMIZED PLANS</NavLink>
            </li>

            <li>
                <NavLink to="/">TRIP PLANNER</NavLink>
            </li>

            <li>
                <NavLink to="/">MAP</NavLink>
            </li>

            <li>
                <NavLink to="/">WEATHER</NavLink>
            </li>

            <li>
                <NavLink to="/">COLLABORATE</NavLink>
            </li>

            <li>
                <NavLink to="/">BUDGET/EXPENSES</NavLink>
            </li>
        </ul>
    )
}

export default ProfileNavLinks;