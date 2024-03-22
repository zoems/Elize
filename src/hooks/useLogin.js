import React, { useState } from "react";

const PASSWORD = import.meta.env.VITE_APP_PAGE_PASSWORD || "ok";

const useLogin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (inputPassword) => {
    if (inputPassword === PASSWORD) {
      setAuthenticated(true);
      console.log("Successful login with", inputPassword);

    } else {
      alert("Incorrect password");
      console.log("Failed login");
      console.log("This is the password:", PASSWORD);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };


  return { handleLogin, handleLogout, authenticated };
};

export default useLogin;
