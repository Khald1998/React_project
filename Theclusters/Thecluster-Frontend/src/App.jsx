import React, { useState, useEffect } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('');
  const sub = () =>{
    axios.get('http://localhost:8080/api')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
  };
  // useEffect(() => {
  //   fetch('http://localhost:8080/api')
  //     .then(response => response.json())
  //     .then(data => setUser(data.user))
  //     .catch(error => console.log(error));
  // }, []);


  return (
    <>
      <Header/>
      <Content />
      <button onClick={sub} className="w-25 mx-auto btn btn-info">sub</button>
      <Footer />
    </>
  );
}

export default App;
