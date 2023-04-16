import React, { useState, useEffect } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('No name was given :(');
  const sub = () =>{
    axios.get('http://localhost:8080/api')
    .then(function (response) {
      // handle success
      console.log(response.data.user);
      setUser(response.data.user);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
  };



  return (
    <>
      <Header/>
      <Content name={user} />
      <Button/>
      <Footer />
    </>
  );
}

export default App;
