import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FormArea from "./FormArea/FormArea";
import "./Style/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/Compose" exact Component={FormArea}/>
        <Route path="/about" exact Component={FormArea}/>
        <Route path="/" exact Component={FormArea}/>
        <Route path="/contact" exact Component={FormArea}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
