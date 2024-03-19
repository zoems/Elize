import React, { useState } from "react";

const PASSWORD = "PASS" //actual password should be stored in .env file

const useLogin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (inputPassword) => {
    if (inputPassword === PASSWORD) {
      setAuthenticated(true);
      console.log("sucessful login")
    } else {
      alert('Incorrect password');
      console.log("failed login")
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  // Return an object containing functions and state variables
  return { handleLogin, handleLogout, authenticated };
};

export default useLogin;
