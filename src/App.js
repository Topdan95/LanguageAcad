import React from 'react';
import HomePage from "./pages/SignUp/HomePage";
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/" exact element={<SignIn />} />
      </Routes> 
    </div>
  );
}

export default App;
