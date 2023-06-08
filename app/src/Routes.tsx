import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/relatorios" element={<Reports />} />
    </Routes>
  )
}

export default Router