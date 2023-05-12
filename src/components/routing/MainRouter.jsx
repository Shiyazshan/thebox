import React from "react";
import { Routes, Route } from "react-router-dom";

//imports
import AppRouter from "./AppRouter";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </>
  );
};

export default MainRouter;
