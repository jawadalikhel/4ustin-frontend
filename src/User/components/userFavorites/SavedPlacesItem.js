// Importing necessary modules from React and custom components
import React, {useState} from "react";

import Button from "../../../shared/components/FormElements/Button";
import Modal from "../../../shared/components/UIElements/Modal";
import Map from "../../../shared/components/UIElements/Map";

// Importing CSS styles for the component
import "../Styles/SavedPlacesItem.css"

//component "PlaceItem" takes props as input
const SavedPlacesItem = (props) =>{

    // Using the React Hook "useState" to create two state variables: "showMap" and "showConfirmModal"
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    // Handler function to open the map modal
    const openMapHandler = () =>{
        setShowMap(true);
    }

    // Handler function to close the map modal
    const closeMapHandler = () =>{
        setShowMap(false);
    }

    // Handler function to show the delete confirmation modal
    const showDeleteWarningHandler = () =>{
        setShowConfirmModal(true);
    }

    // Handler function to cancel the delete action and hide the confirmation modal
    const cancelDeleteHandler = () =>{
        setShowConfirmModal(false);
    }

    // Handler function to confirm the delete action, hide the confirmation modal, and...
    const confirmDeleteHandler = () =>{
        setShowConfirmModal(false);
        console.log("DELETING")
    }

    // The component's JSX code starts here
    return(
        <React.Fragment>
            {/* Modal for displaying the map */}
            <Modal 
                show={showMap} 
                onClick={closeMapHandler} 
                header={props.address} 
                contentClass="place-item__modal-content" 
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button onClick={closeMapHandler}>CLOSE</Button>
                        <Button>Remove</Button>
                    </React.Fragment>
                }
            >
                <div className="map-container">
                    {/* Displaying the map using the Map component with the coordinates provided */}
                    <Map center={props.location} zoom={17}/>
                </div>
            </Modal>

            {/* The main content of the component */}
            <li className="savedPlacesItem-content" key={props.id}>
                <div className="">
                    <div>
                        <img
                        src={
                            props.photo
                            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photo}&key=AIzaSyDFbEN9gh-kB68Qz8hgM_YXU3m0XX84hkk`
                            : null
                        }
                        alt={props.name}
                        />
                    </div>
                    <div>
                        <h2>{props.name}</h2>
                        <h3>
                        {props.Rating} ({props.userRatingTotal})
                        </h3>
                    </div>
                    <div>
                        <Button inverse onClick={openMapHandler}>
                        VIEW IN MAP
                        </Button>
                    </div>
                </div>
            </li>
            
        </React.Fragment>
    )
}

// Exporting the component to be used in other parts of the application
export default SavedPlacesItem;