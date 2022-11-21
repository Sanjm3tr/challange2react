import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Products from "./components/Products";
import LogIn from "./components/LogIn";
import "./styles/App.css";

function App() {
  return (
    <div className="con">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/roducts" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
