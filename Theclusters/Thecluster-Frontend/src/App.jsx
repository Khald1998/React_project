import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Compose from "./Compose/Compose";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Requests from "./Requests/Requests";

import MainPage from "./MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.css";

import "./Style/App.css";
import Post from "./Post/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Compose" exact Component={Compose} />
          <Route path="/AboutUs" exact Component={AboutUs} />
          <Route path="/" exact Component={MainPage} />
          <Route path="/ContactUs" exact Component={ContactUs} />
          <Route path="/Requests" exact Component={Requests} />
          <Route path="/Requests/:id" exact Component={Post} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
