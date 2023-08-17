import React, { useState } from "react";
import Header from "../components/Header";
import ProfileMainNavigation from "../components/Navigation/ProfileMainNavigation";
import MyFavorites from "../components/MyFavorites"
import CustomizedPlans from "../components/CustomizedPlans";

import "./Styles/PlanMyVisit.css";

const PlanMyVisit = () =>{
    const [selectedOption, setSelectedOption] = useState("myFavorites");

    const handleOptionSelect = (option) =>{
        setSelectedOption(option);
    }

    // Define a function to render the appropriate component based on selectedOption
    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case "myFavorites":
                return <MyFavorites />;
            case "customizedPlans":
                return <CustomizedPlans />;
            // case "tripPlanner":
            //     return <TripPlannerComponent />;
            // case "map":
            //     return <MapComponent />;
            // case "weather":
            //     return <WeatherComponent />;
            // case "collaborate":
            //     return <CollaborateComponent />;
            // case "budgetExpenses":
            //     return <BudgetExpensesComponent />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Header />
            <ProfileMainNavigation handleOptionSelect={handleOptionSelect}/>
            {renderSelectedComponent()}
            
        </div>
    )
}

export default PlanMyVisit;