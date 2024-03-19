import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { handleLogin, handleLogout, authenticated } = useLogin();
  const [inputPassword, setInputPassword] = useState('');

  const handleChange = (event) => {
    setInputPassword(event.target.value);
  };

  return (
    <div>
      {authenticated ? (
        <div>
          <p>Welcome! the page is {authenticated}.</p>
          <button onClick={handleLogout()}>Logout</button>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin(inputPassword);
          }}
        >
          <input
            type="password"
            placeholder="Enter password"
            value={inputPassword}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
