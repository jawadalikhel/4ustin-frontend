import React, {useState, useCallback, useEffect} from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

let logoutTimer;

export const useAuth = () =>{
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

    return {token, userId, login, logout};
}