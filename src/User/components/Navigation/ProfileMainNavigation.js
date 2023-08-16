import React, {useState} from "react";
import ProfileNavLinks from "./ProfileNavLinks";
import ProfileNavDrawer from "./ProfileNavDrawer";

import "./Styles/ProfileMainNavigation.css"

const ProfileMainNavigation = () =>{
    // Using the "useState" hook to manage the state of the side drawer (open/closed)
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    // Handler function to open the side drawer
    const openDrawerHandler = () =>{
        setDrawerIsOpen(true);

        if(drawerIsOpen){
            closeDrawerHandler();
        }else{
            setDrawerIsOpen(true);
        }
    }

    // Handler function to close the side drawer
    const closeDrawerHandler = () =>{
        setDrawerIsOpen(false);
    }
    return(
        <div>
            {
                drawerIsOpen === true ?  <ProfileNavDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="profile-main-navigation_drawer-nav">
                    <ProfileNavLinks />
                </nav>
            </ProfileNavDrawer> : null
            }
           

             {/* The "button" element serves as a menu button to open the side drawer */}
             <button className="profile-main-navigation_menu-btn" onClick={openDrawerHandler}>
                <span />
                <span />
                <span />
            </button>

            <nav className="profile-main-navigation_header-nav">
                <ProfileNavLinks />
            </nav>
            
        </div>
    )
}

export default ProfileMainNavigation;