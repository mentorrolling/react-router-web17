import { Routes, Route } from "react-router-dom";
import React from "react";

const RouteSecondary = () => {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route path="about" element={<AboutScreen />} />
      </Route>
    </Routes>
  );
};

export default RouteSecondary;
