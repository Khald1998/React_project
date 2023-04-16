import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Content(props) {

  const [name, setName] = useState('No name was given :(');
  useEffect(() => {
    // make GET request to server
    axios.get('http://localhost:8080/api')
      .then(response => {
        setName(response.data.user); // update name state with response data
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="text-center p-5 m-5">
      <h1>Your name is </h1>
      <div>
        <p>
          {name}
        </p>
      </div>
    </div>
  )
}

export default Content


// const sub = () =>{
//   axios.get('http://localhost:8080/api')
//   .then(function (response) {
//     // handle success
//     console.log(response.data.user);
//     setUser(response.data.user);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// };