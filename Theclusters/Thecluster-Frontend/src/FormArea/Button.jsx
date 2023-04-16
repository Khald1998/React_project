// import React, { useState, useEffect } from "react";
// import axios from "axios";

function Button() {
  //   const [valueInpute, setvalue] = useState("");

  //   function handelChange(event) {
  //     setvalue(event.target.value);
  //   }
  //   function handelClick() {
  //     axios
  //       .post("http://localhost:8080/name", {
  //         Name: valueInpute
  //       })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     console.log("What u intered: " + valueInpute);
  //   }
  return (
    <>
      <div className="my-4  text-center mx-auto">
        <button
          type="submit"
          name="button"
          value="Submitting"
          className="mx-auto text-center mw-100 mx-auto btn btn-info"
        //   onClick={handelClick}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Button;
