import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
