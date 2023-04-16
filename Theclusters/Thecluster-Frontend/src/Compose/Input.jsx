import React, { useState, useEffect } from "react";
function Input(props) {
  const [valueInpute, setvalue] = useState("");
  function inputChange(event) {
    console.log(`${props.name} is ` + event.target.value);
    setvalue(event.target.value);
  }
  return (
    <div className="text-center my-3">
      <input
        required
        onChange={inputChange}
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={valueInpute}
      />
    </div>
  );
}

export default Input;
