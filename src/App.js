import React from "react";
import { Route, Routes } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LandingPage from "./PublicView/pages/LandingPage";
import PlacesToEat from "./PublicView/pages/PlacesToEat";

export default function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/eat' element={<PlacesToEat/>} />
      </Routes>
    </div>
  );
};