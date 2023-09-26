import React, {useState, useCallback, useEffect} from "react";
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

let logoutTimer;

export default function App() {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(); 

  const navigate = useNavigate();

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    // save the userId and the user's token to the localStorage to keep the user login for 1 hour, even if the user refreshesh the page user will reamin loggedin
    localStorage.setItem(
      'userData', 
      JSON.stringify({
        userId: uid, 
        token: token,
        expiration: tokenExpirationDate.toISOString()
      })
    );

    setUserId(uid);
    navigate(`/planMyVisit/${uid}`)
  }, [])

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData')
  }, [])

  useEffect(() =>{
    if(token && tokenExpirationDate){
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    }else{
      clearTimeout(logoutTimer);
    }
    
  },[token, logout, tokenExpirationDate])

  useEffect(() =>{
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if(storedData && storedData.token && new Date(storedData.expiration) > new Date()){
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  },[login])

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