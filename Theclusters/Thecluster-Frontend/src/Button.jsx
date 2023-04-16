import React, { useState, useEffect } from "react";
import axios from "axios";

function Button() {
  const [valueInpute, setvalue] = useState("");

  function handelChange(event) {
    setvalue(event.target.value);
  }
  function handelClick() {
    axios
      .post("http://localhost:8080/name", {
        Name: valueInpute
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("What u intered: " + valueInpute);
  }
  return (
    <>
      <div className=" text-center mx-auto">
        <div className="raw mw-100 text-center mx-auto">
          <input
            name="inp"
            onChange={handelChange}
            className="form-control my-3 text-center"
            type="text"
            placeholder="Give me your name"
            value={valueInpute}
          />
        </div>
        <div className="raw  text-center mx-auto">
          <button
            type="submit"
            name="button"
            value="Submitting"
            className="mx-auto text-center mw-100 mx-auto btn btn-info"
            onClick={handelClick}
          >
            Submitting
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
