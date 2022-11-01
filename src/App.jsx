import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./components/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
