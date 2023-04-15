import React, { useState, useEffect } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
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
      <Content />
      <h1 className='text-center p-5'>{user}</h1>
      <button onClick={sub} className="w-25 mx-auto btn btn-info">sub</button>
      <Footer />
    </>
  );
}

export default App;
