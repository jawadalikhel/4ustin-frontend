import React, {Suspense} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

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
// Custome hook to auth
import { useAuth } from "./shared/hooks/auth-hook";
// user's routes
import PlanMyVisit from "./User/pages/PlanMyVisit";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

// React.lazy() loads components asynchronously, which means that all of the code for the applications will not
// be downloaded at onces, but instead it downloads the code to local enviroment on the fly and then render these pages
// THIS HELPS WITH THE INITIAL PAGE LOADING TIME AND REDUCES THE LOAD-TIME, because it downloads less code initially 
// const MainNavigation = React.lazy(() => import("./shared/components/Navigation/MainNavigation"));
// const LandingPage = React.lazy(() => import("./PublicView/pages/LandingPage"));
// const PlacesToEat = React.lazy(() => import("./PublicView/pages/PlacesToEat"));
// const ShopLocal = React.lazy(() => import("./PublicView/pages/ShopLocal"));
// const Nightlife = React.lazy(() => import("./PublicView/pages/Nightlife"));
// const Outdoors = React.lazy(() => import("./PublicView/pages/Outdoors"));
// const ThingsToDo = React.lazy(() => import("./PublicView/pages/ThingsToDo"));
// const News = React.lazy(() => import("./PublicView/pages/News"));
// const Austinite = React.lazy(() => import("./PublicView/pages/Austinite"));
// const SubmitPictures = React.lazy(() => import("./PublicView/pages/SubmitPictures"));
// const Auth = React.lazy(() => import("./User/pages/Auth"));

export default function App() {
 
  const {token, userId, login, logout} = useAuth();

  return (
    <AuthContext.Provider value={{isLoggedIn: !!token, token: token, userId: userId, login: login, logout:logout}}>
      <div>
        <MainNavigation/>
        {
          token ?
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
              <Route path='/planMyVisit/:userId' element={<PlanMyVisit/>}/>
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