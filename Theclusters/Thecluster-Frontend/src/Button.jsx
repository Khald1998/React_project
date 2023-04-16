import React, { useState, useEffect } from "react";

function Button() {
  const [valueInpute, setvalue] = useState("");

  function handelChange(event) {
    setvalue(event.target.value);
  }
  function handelClick(event) {
    // event.preventDefault();
    console.log("What u intered: "+valueInpute);

  }
  return (
    <>
      <div className=" text-center mx-auto">
        <form
          action="http://localhost:8080/name"
          method="post"
          onSubmit={handelClick}
        >
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
            >
              Submitting
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Button;
