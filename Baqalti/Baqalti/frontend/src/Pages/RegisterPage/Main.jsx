import React, { useState } from "react";
import useWarningAmount from "./Hooks/useWarningAmount";
import useShowWarning from "./Hooks/useShowWarning";
import useGreenLight from "./Hooks/useGreenLight";

import Filed from "./Filed";
import Warning from "./Warning";
import Button from "./Button";
import {
  debouncedHandleEmailChange,
  debouncedHandleUsernameChange,
  debouncedHandlePhoneChange,
  validateName,
  validatePassword,
  handleSubmit,
} from "./Functions";

function Main() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningAmount, setWarningAmount] = useState(0);
  const [FiledNameError, setFiledNameError] = useState(null);
  const [FiledPhoneError, setFiledPhoneError] = useState(null);
  const [FiledEmailError, setFiledEmailError] = useState(null);
  const [FiledUsernameError, setFiledUsernameError] = useState(null);
  const [FiledPasswordError, setFiledPasswordError] = useState(null);
  const [greenLight, setGreenLight] = useState(false);

  useWarningAmount(
    FiledNameError,
    FiledPhoneError,
    FiledEmailError,
    FiledUsernameError,
    FiledPasswordError,
    setWarningAmount
  );
  useShowWarning(warningAmount, setShowWarning);
  useGreenLight(
    warningAmount,
    name,
    email,
    username,
    phone,
    password,
    setGreenLight
  );

  const handleNameChange = (value) => {
    setName(value);
    validateName(value, setFiledNameError);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    debouncedHandleEmailChange(value, setFiledEmailError);
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
    debouncedHandleUsernameChange(value, setFiledUsernameError);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    debouncedHandlePhoneChange(value, setFiledPhoneError);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    validatePassword(value, setFiledPasswordError);
  };

  const handleFormSubmit = () => {
    handleSubmit(name, email, username, phone, password);
  };

  return (
    <>
      <section className={`h-screen w-full ${!showWarning ? "max-sm:mt-20":"max-sm:mt-44 max-sm:mb-24"} ${!showWarning ? "xl:mt-14":"xl:mt-28 xl:mb-28"}`}>
        <div className="flex justify-center items-center h-full w-full">
          <div className="xl:w-1/2 ">
            <div className="bg-nav border-2 border-prime w-full h-full rounded-3xl flex flex-col justify-center py-8">
              <div
                className={`${
                  !showWarning ? "opacity-0 h-0" : "opacity-100 h-24"
                } transition-all ease-in-out duration-300`}
              >
                <Warning amount={warningAmount} />
              </div>
              <div className="flex flex-col justify-evenly z-10">
                <Filed
                  Id="Email"
                  error={FiledEmailError}
                  Label="Email"
                  PlaceHolder="Enter your Email"
                  onChange={handleEmailChange}
                />
                <Filed
                  Id="Username"
                  error={FiledUsernameError}
                  Label="Username"
                  PlaceHolder="Enter your Username"
                  onChange={handleUsernameChange}
                />
                <Filed
                  Id="Name"
                  error={FiledNameError}
                  Label="Name"
                  PlaceHolder="Enter your name"
                  onChange={handleNameChange}
                />
                <Filed
                  Id="Phone"
                  error={FiledPhoneError}
                  Label="Phone"
                  PlaceHolder="Enter your Phone"
                  onChange={handlePhoneChange}
                />
                <Filed
                  Id="Password"
                  error={FiledPasswordError}
                  Label="Password"
                  PlaceHolder="Enter your Password"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="flex justify-center items-center">
                <Button
                  onClick={handleFormSubmit}
                  CSS={`${
                    greenLight
                      ? "hover:bg-prime hover:text-white"
                      : "cursor-not-allowed focus:outline-none opacity-50"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
