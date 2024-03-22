import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import styles from '../style'

const Login = () => {
  const { handleLogin, authenticated } = useLogin(); //handleLogout <button onClick={handleLogout}>Logout</button>
  const [inputPassword, setInputPassword] = useState('');
  const navigate = useNavigate();


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
      {authenticated ? (navigate("/home")
      ) : (
        <div className={`${styles.flexCenter}`}>
          <form onSubmit={handleSubmit} className='absolute top-1/2 transform -translate-y-1/2 w-full max-w-sm'>
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
        </div>
      )}
    </div>
  );
};

export default Login;
