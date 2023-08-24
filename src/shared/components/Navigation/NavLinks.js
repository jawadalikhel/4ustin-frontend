import React, {useContext} from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./Styles/NavLinks.css";

const NavLinks = () =>{
    const auth = useContext(AuthContext);
    return(
        <ul className="nav-links">
            {/* The "NavLink" component is a special version of the "Link" component from "react-router-dom" */}
            {/* It automatically applies the "active" class to the link when the current URL matches the "to" prop */}
            <li>
                <NavLink to="/">HOME</NavLink>
            </li>

            <li>
                <NavLink to="/eat">PLACES TO EAT</NavLink>
            </li>

            <li>
                <NavLink to="/shop">SHOP LOCAL</NavLink>
            </li>

            <li>
                <NavLink to="/nightlife">NIGHTLIFE</NavLink>
            </li>

            <li>
                <NavLink to="/outdoors">OUTDOORS</NavLink>
            </li>

            {
                auth.isLoggedIn ?  
                <li>
                    <NavLink to="/planMyVisit">PLAN MY VISIT</NavLink>
                </li> :
                 <li>
                    <NavLink to="/auth">PLAN MY VISIT</NavLink>
                </li>
            }
           

            <li className="mobile-screen">
                <NavLink to="/thingsToDo">THINGS TO DO</NavLink>
            </li>
            <li className="mobile-screen">
                <NavLink to="/visitLikeAustinite">VISIT LIKE AN AUSTINITE</NavLink>
            </li>
            <li className="mobile-screen">
                <NavLink to="/submitPictures">SUBMIT YOUR PICTURES</NavLink>
            </li>
            <li className="mobile-screen">
                <NavLink to="/news">NEWS</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;