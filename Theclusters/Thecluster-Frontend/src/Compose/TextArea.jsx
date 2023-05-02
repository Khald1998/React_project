import TextAreaCSS from'../Style/TextArea.module.css';
import React, { useState, useEffect } from "react";

function TextArea(props) {
  const [valueInput, setvalue] = useState("");
  function inputChange(event) {
    console.log("TextArea is "+event.target.value)
    setvalue(event.target.value);
  }
  return (
    <div className={`form-outline my-3 mx-auto ${TextAreaCSS.mw_50} ${TextAreaCSS}`}>
      <textarea maxLength="2000" style={{ resize: "none" }} onChange={inputChange} value={valueInput} className="form-control " id="form4Example3" cols={props.col} rows={props.row} placeholder={props.placeholder} name={props.name}></textarea>
    </div>
  );
}

export default TextArea;
