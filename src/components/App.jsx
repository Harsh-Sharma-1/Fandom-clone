import React from "react";
import SimpleHeader from "./simpleheader/simpleHeader";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
