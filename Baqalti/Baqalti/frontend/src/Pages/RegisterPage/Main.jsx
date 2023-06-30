import React, { useState } from "react";
import Filed from "./Filed";
import Warning from "./Warning";
import Button from "./Button";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [greenLight, setGreenLight] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
    console.log("Name:", value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    console.log("Email:", value);
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
    console.log("Username:", value);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    console.log("Phone:", value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    console.log("Password:", value);
  };



  return (
    <>
      <section className="h-screen w-full">
        <div className="flex justify-center items-center h-full w-full ">
          <div className="h-3/4 w-1/2 mt-16">
            <div className="bg-gray-100 w-full h-full rounded-3xl flex flex-col justify-center ">
              <div>
                <Warning className="h-[20%]" />
              </div>
              <div className="h-[70%] flex flex-col justify-evenly">
                <Filed
                  Id="Name"
                  Label="Name"
                  PlaceHolder="Enter your name"
                  onChange={handleNameChange}
                />
                <Filed
                  Id="Email"
                  Label="Email"
                  PlaceHolder="Enter your Email"
                  onChange={handleEmailChange}
                />
                <Filed
                  Id="Username"
                  Label="Username"
                  PlaceHolder="Enter your Username"
                  onChange={handleUsernameChange}
                />
                <Filed
                  Id="Phone"
                  Label="Phone"
                  PlaceHolder="Enter your Phone"
                  onChange={handlePhoneChange}
                />
                <Filed
                  Id="Password"
                  Label="Password"
                  PlaceHolder="Enter your Password"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="h-[10%] flex justify-center items-center">
                <Button state={greenLight}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
