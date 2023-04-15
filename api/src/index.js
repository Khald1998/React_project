// import express from "express";
import React from 'react';
import ReactDOM from 'react-dom';
import AppOne from './AppOne';
import AppTwo from './AppTwo';

// const app = express();
const root = ReactDOM.createRoot(document.getElementById('root'));


// app.get("/one", function (req, res) {

//   root.render(
//     <AppOne />
// );

// });

// app.get("/two", function (req, res) {

//   root.render(
//     <AppTwo />
// );

// });

root.render(
  <AppTwo />
);