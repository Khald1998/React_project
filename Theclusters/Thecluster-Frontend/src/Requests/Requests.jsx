import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Requests() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/Data")
      .then((response) => (console.log(response.data), setData(response.data)))
      // .then((response) => )
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">All the Requests</h1>
      </div>
      <Card />
    </div>
  );
}

export default Requests;
