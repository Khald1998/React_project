import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
import Alart from "./Alart";
import React, { useState } from "react";

function Compose() {
  const [valueInpute, setvalue] = useState("");
  const [valueClass, setClass] = useState("d-none");
  function validatePhoneNumber(phoneNumber) {
    // Regular expression to match 12-digit phone numbers
    const phoneRegex = /^\d{12}$/;

    return phoneRegex.test(phoneNumber);
  }

  function inputChangeP(event) {
    if (event.target.value != "") {
      setClass("");
      setvalue(
        validatePhoneNumber(event.target.value)
          ? "The phone number used looks Valid, Make sure it's correct since it is the only way of communication"
          : "The phone number used looks Invalid Example(966580599359)"
      );
    } else {
      setClass("d-none");
    }
    console.log(event.target.value);
  }
  return (
    <>
      <Alart text="Requeses will be deleted after 2 days." className="mt-5" />
      <form action="http://localhost:7001/Add" method="post">
        <div className="container my-5">
          <Input
            placeholder="Your Name"
            name="name"
            check={false}
            num={false}
          />
          <Input
            placeholder="Your Phone"
            name="phone"
            className="mb-1"
            onChange={inputChangeP}
            check={true}
            num={true}
          />
          <Alart className={`mt-4 ${valueClass}`} text={valueInpute} />
          <Select className="mt-4" />
          <TextArea placeholder="Your Idea" row={4} col={40} name="idea" />
          <Button />
        </div>
      </form>
    </>
  );
}

export default Compose;
