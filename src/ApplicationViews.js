import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from './auth/Login';
import { Home } from "./home/Home";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to='/login' />;
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem('user') !== null)
  }

  return (
    <>
      <Routes> 
        <Route exact path='/login' element={<Login setAuthUser={setAuthUser}/>} />
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </>
  );
};