import React, { useState, useEffect } from "react";
import Filed from "./Filed";
import Warning from "./Warning";
import Button from "./Button";
import Filter from "bad-words"; // Import the bad-words library and rename it to Filter

function RegisterPage() {
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

  const filter = new Filter(); // Create an instance of the bad-words filter

  useEffect(() => {
    // Count the non-null errors
    const errorCount =
      (FiledNameError !== null ? 1 : 0) +
      (FiledPhoneError !== null ? 1 : 0) +
      (FiledEmailError !== null ? 1 : 0) +
      (FiledUsernameError !== null ? 1 : 0) +
      (FiledPasswordError !== null ? 1 : 0);

    // Set the warningAmount state
    setWarningAmount(errorCount);
  }, [
    FiledNameError,
    FiledPhoneError,
    FiledEmailError,
    FiledUsernameError,
    FiledPasswordError,
  ]);

  useEffect(() => {
    // Count the non-null errors
    const errorCount = warningAmount;
    if (errorCount > 0) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [warningAmount]);

  const handleNameChange = (value) => {
    setName(value);
    if (filter.isProfane(value)) {
      setFiledNameError("Name is bad");
    } else {
      setFiledNameError(null);
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    
  };

  const isEmailUsed = () => {
    // Perform actions when the input field is deselected
    console.log('Input field deselected');
  };

  
  const handleUsernameChange = (value) => {
    setUsername(value);
    
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    if (value.length > 0) {
      const isValidSaudiNumber = /^9665\d{8}$/.test(value);
      if (!isValidSaudiNumber) {
        setFiledPhoneError("Phone is not Valid");
      } else {
        setFiledPhoneError(null);
      }
    } else {
      setFiledPhoneError("Phone should not be empty");
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value.length < 4) {
      setFiledPasswordError("Password is short");
    } else {
      setFiledPasswordError(null);
    }
  };

  return (
    <>
      <section className="h-screen w-full my-16">
        <div className="flex justify-center items-center h-full w-full ">
          <div className="w-1/2 mt-10">
            <div className="bg-nav border-2 border-prime w-full h-full rounded-3xl flex flex-col justify-center py-8 relative">
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
                  onBlur={isEmailUsed}
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
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
