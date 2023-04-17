import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Nothing from "./Nothing";
import Alart from "../Compose/Alart";

function creatCard(data) {
  if (
    data.hasOwnProperty("name") &&
    data.hasOwnProperty("phone") &&
    data.hasOwnProperty("cluster") &&
    data.hasOwnProperty("idea")
  ) {
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
  } else {
    return <Nothing />;
  }
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
        if (error.response && error.response.status === 404) {
          setIsError(true);
        } else {
          console.log(error);
        }
      });
  }, []);

  return (
    <>
      <Alart />

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
