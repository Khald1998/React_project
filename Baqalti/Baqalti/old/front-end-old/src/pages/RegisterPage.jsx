import FullLogo from "../parts/fullLogo";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("Khaled");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(ev) {
    ev.preventDefault();
    axios
      .post("/register", {
        name: name,
        email: email,
        username: username,
        phone: phone,
        password: password,
      })
      .then((res) => {
        console.log(res);
        alert("User registered successfully, Now you can log in");
      })
      .catch((err) => {
        console.log(err);
        alert("User registration failed, Please try again");
      });
  }

  return (
    <div className="mt-80 items-center justify-around ">
      <div className="flex grow items-center bg-blueDark max-w-4xl mx-auto border rounded-xl">
        <FullLogo />
        <form
          className="flex flex-col bg-blueDark w-full pr-3 mx-4 py-8"
          onSubmit={registerUser}
        >
          <h1 className="text-4xl text-center pb-2 bg-blueDark text-beigeLight font-mono mb-4">
            Register
          </h1>
          <label for="email" className="text-beigeLight text-2xl pl-1">
            Email
          </label>
          <input
            className="bg-beigeLight"
            type="email"
            placeholder={"your@email.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="username" className="text-beigeLight text-2xl pl-1">
            UserName
          </label>
          <input
            className="bg-beigeLight"
            type="text"
            placeholder={"username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <label for="phone" className="text-beigeLight text-2xl pl-1">
            Phone Number
          </label>
          <input
            className="bg-beigeLight"
            type="tel"
            placeholder={"+966 5XX XXX XXXX"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label for="password" className="text-beigeLight text-2xl pl-1">
            Password
          </label>
          <input
            className="bg-beigeLight"
            type="password"
            placeholder={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="log">Register</button>
          <div className="text-center text-beigeLight py-2">
            Already a member?{" "}
            <Link to={"/login"} className="hover:text-blueLight underline">
              LogIn now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
