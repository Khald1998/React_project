import React, { useState } from "react";
function Input(props) {
  const [valueInpute, setvalue] = useState("");
  function inputChange(event) {
    console.log(`${props.name} is ` + event.target.value);
    setvalue(event.target.value);
  }
  const handleInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };
  return (
    <div className={`text-center my-3 mx-auto mw-50  ${props.className}`}>
      <input
        className="form-control"
        required
        onChange={(event) => {
          inputChange(event);
          if (props.check) {
            props.onChange(event);
          }
        }}
        placeholder={props.placeholder}
        name={props.name}
        value={valueInpute}
        type="text"

        onInput={props.num ? handleInput : undefined} 




      />
    </div>
  );
}

export default Input;
