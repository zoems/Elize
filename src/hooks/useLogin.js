import React, { useState } from "react";

const PASSWORD = 'password'

const useLogin = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword('');
  };

  return ( handleLogin, handleLogout, authenticated );
};

export default useLogin;
