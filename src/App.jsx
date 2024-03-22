import React from 'react';

import { Login } from "./components"
import Home from "./pages/Home"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useLogin from './hooks/useLogin';

const App = () => {
  const { authenticated } = useLogin();

return (

  <Router>
    <Routes>
      <Route path="/" element={authenticated ? <Home /> : <Login />}/>
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
)}


export default App
// if a react component simply returns JSX then you dont need the curly braces
