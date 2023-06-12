import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import BySilo from "./pages/BySilo";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/por-silo" element={<BySilo />}/>
      <Route path="/relatorios" element={<Reports />} />
    </Routes>
  )
}

export default Router