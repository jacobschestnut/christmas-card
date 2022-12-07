import { React, useState } from 'react';
import './App.css';
import { ApplicationViews } from "./ApplicationViews";

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("user") !== null);

  const setAuthUser = (user) => {
      sessionStorage.setItem("user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("user") !== null)
  };

  return (
    <>
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};