import FullLogo from "../parts/fullLogo";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  function loginUser(ev) {
    ev.preventDefault();
    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setUser(res.data);
        alert("User logged in successfully");
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
        alert("User login failed, Please try again");
      });
  }

  if (redirect) return <Navigate to={'/'} />;
  

  return (
    <div className="mt-80 items-center justify-around ">
      <div className="flex grow items-center bg-blueDark max-w-4xl mx-auto border rounded-xl">
        <FullLogo />
        <form
          className="flex flex-col bg-blueDark w-full pr-3 mx-4 py-8"
          onSubmit={loginUser}
        >
          <h1 className="text-4xl text-center pb-2 bg-blueDark text-beigeLight font-mono mb-4">
            LogIn
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
          <button className="log">Login</button>
          <div className="text-center text-beigeLight py-2">
            Don't have an account yet?{" "}
            <Link to={"/register"} className="hover:text-blueLight underline">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
