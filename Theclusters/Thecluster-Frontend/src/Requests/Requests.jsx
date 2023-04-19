import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Nothing from "./Nothing";
import Alart from "./Alart";

function creatCard(data) {
  return (
    <Card
      _id={data._id}
      key={data._id}
      name={data.name}
      phone={data.phone}
      cluster={data.cluster}
      idea={data.idea}
      createdAt={data.createdAt}
    />
  );
}

function Requests() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/DataAll")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      });
  }, []);

  return (
    <>
      <Alart text="Requeses will be deleted after 2 days." className="mt-5" />

      <div className="container my-5">
        <div className="row">
          <h1 className="text-center">All The Requests</h1>
        </div>
        {isError ? (
          <Nothing />
        ) : (
          data.map((d) => <div key={d._id}>{creatCard(d)}</div>)
        )}
      </div>
    </>
  );
}

export default Requests;
