import React from "react";
import { Routes, Route } from "react-router-dom";

//imports
import Home from "../screens/Home";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import About from "../screens/About";
import Services from "../screens/Services";
import Contact from "../screens/Contact";
import Gallery from "../screens/Gallery";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
