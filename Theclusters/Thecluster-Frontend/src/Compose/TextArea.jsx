import '.././Style/TextArea.css';
import React, { useState, useEffect } from "react";

function TextArea(props) {
  const [valueInpute, setvalue] = useState("");
  function inputChange(event) {
    console.log("TextArea is "+event.target.value)
    setvalue(event.target.value);
  }
  return (
    <div className="form-outline my-3 mx-auto mw-50 ">
      <textarea onChange={inputChange} value={valueInpute} className="form-control " id="form4Example3" cols={props.col} rows={props.row} placeholder={props.placeholder} name={props.name}></textarea>
    </div>
  );
}

export default TextArea;
