import React, {useState, useCallback} from "react";
import { Route, Routes, Navigate, useNavigate, useParams } from "react-router-dom";

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

import { AuthContext } from "./shared/context/auth-context";
// user's routes
import PlanMyVisit from "./User/pages/PlanMyVisit";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(); 

  const navigate = useNavigate();

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
    navigate(`/planMyVisit/${uid}`)
  }, [navigate])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, [])

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, userId: userId, login: login, logout:logout}}>
      <div>
        <MainNavigation/>
        {
          isLoggedIn ?
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
            <Route path='/planMyVisit/:userId' element={<PlanMyVisit/>} exact/>
          </Routes>

        :
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
          <Route path="/auth" element={<Auth />} />
          {/* Redirect the user to auth route if not loggedin */}
          <Route path="/planMyVisit/:userId" element={<Navigate replace to="/auth" />}/>
        </Routes>
        }
      </div>
    </AuthContext.Provider>
  );
};