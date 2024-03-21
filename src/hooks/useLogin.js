import React, { useState } from "react";

const PASSWORD = import.meta.env.VITE_APP_PAGE_PASSWORD || 'ok' //actual password should be stored in .env file

const useLogin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (inputPassword) => {
    if (inputPassword === PASSWORD) {
      setAuthenticated(true);
      console.log("sucessful login")
      console.log(`this is the password`, PASSWORD)
    } else {
      alert('Incorrect password');
      console.log("failed login")
      console.log(`this is the password`, PASSWORD)
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  // Return an object containing functions and state variables
  return { handleLogin, handleLogout, authenticated };
};

export default useLogin;
