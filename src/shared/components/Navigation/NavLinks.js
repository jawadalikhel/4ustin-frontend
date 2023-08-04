import { NavLink } from "react-router-dom";

import "./Styles/NavLinks.css";

const NavLinks = () =>{
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
                <NavLink to="/shop">SHOPT LOCAL</NavLink>
            </li>

            <li>
                <NavLink to="/nightlife">NIGHTLIFE</NavLink>
            </li>

            <li>
                <NavLink to="/outdoors">OUTDOORS</NavLink>
            </li>

            <li>
                <NavLink to="/planMyVisit">PLAN MY VISIT</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;