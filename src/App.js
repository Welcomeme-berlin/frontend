import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
