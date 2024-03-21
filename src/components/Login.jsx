import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { handleLogin, handleLogout, authenticated } = useLogin();
  const [inputPassword, setInputPassword] = useState('');

  const handleChange = (event) => {
    setInputPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(inputPassword);
    setInputPassword('');
  };

  return (
    <div>
      {authenticated ? (
        <div>
          <p>Welcome! Keep going you got this! it looks great already.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b-2  border-white py-2">
            <input
              type="password"
              placeholder="Enter Password"
              aria-label="Enter Password"
              value={inputPassword}
              onChange={handleChange}
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <button
              className="flex-shrink-0 bg-white hover:bg-slate-700 border-white hover:border-slate-700 text-sm border-4 text-slate-700 hover:text-white py-1 px-2 rounded"
              type="submit">
                Login
              </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
