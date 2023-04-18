import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
import Alart from "./Alart";
import React, { useState } from "react";


function Compose() {
  const [valueInpute, setvalue] = useState("");
  function inputChangeP(event) {
    setvalue(event.target.value);
  }
  return (
    <>
      <Alart text="Requeses will be deleted after 2 days." className="mt-5"/>
      <form action="http://localhost:8080/DataAdd" method="post">
        <div className="container my-5">
          <Input placeholder="Your Name" name="name" check={false} num={false}/>
          <Input placeholder="Your Phone: 966580599359" name="phone" className="mb-1" onChange={inputChangeP} check={true} num={true}/>
          <Alart className={`mt-4 ${""}`} text={valueInpute}/>
          <Select className="mt-4"/>
          <TextArea placeholder="Your Idea" row={4} col={40} name="idea" />
          <Button />
        </div>
      </form>
    </>
  );
}

export default Compose;
