import React from "react";
import { Route, Routes } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LandingPage from "./PublicView/pages/LandingPage";
import PlacesToEat from "./PublicView/pages/PlacesToEat";
import ShopLocal from "./PublicView/pages/ShopLocal";
import Nightlife from "./PublicView/pages/Nightlife";
import Outdoors from "./PublicView/pages/Outdoors";
import ThingsToDo from "./PublicView/pages/ThingsToDo";
import News from "./PublicView/pages/News";
import Austinite from "./PublicView/pages/Austinite";
import SubmitPictures from "./PublicView/pages/SubmitPictures";
import Auth from "./User/pages/Auth";

// user's routes
import PlanMyVisit from "./User/pages/PlanMyVisit";

export default function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/eat' element={<PlacesToEat/>} />
        <Route path='/shop' element={<ShopLocal/>} />
        <Route path='/nightlife' element={<Nightlife/>} />
        <Route path='/outdoors' element={<Outdoors/>} />
        <Route path='/thingsToDo' element={<ThingsToDo/>} />
        <Route path='/visitLikeAustinite' element={<Austinite/>} />
        <Route path='/submitPictures' element={<SubmitPictures/>} />
        <Route path='/news' element={<News/>} />

        {/* User's routes */}
        <Route path='/planMyVisit' element={<PlanMyVisit/>} />

        <Route path="/auth" element={<Auth />} />

      </Routes>
    </div>
  );
};