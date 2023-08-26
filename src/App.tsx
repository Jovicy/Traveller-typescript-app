import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Packages from "./components/packages";
import Contact from "./components/contact";
import Destination from "./components/destination";
import Testimonial from "./components/testimonial";
import Blog from "./components/blog";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Packages/>
      <Contact/>
      <Destination/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;
