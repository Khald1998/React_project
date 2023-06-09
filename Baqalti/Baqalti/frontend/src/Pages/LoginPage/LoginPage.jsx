import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';
import Warning from "./Warning";
const login = import.meta.env.VITE_URL || 'http://localhost:8080';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const body = { email, password };
  const cookies = new Cookies();

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(`${login}/login`, body)
      .then((Response) => {
        if (Response.status == 200) {
          console.log(Response.data);
          cookies.set('token',Response.data.token,{
            maxAge: 60 * 5,
            path:'/',
           });
          setShowWarning(false);
          navigate('/Profile')
        } else {
          console.log(Response.status);
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
        setShowWarning(true);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-5">Login</h2>
        {showWarning && <Warning/>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div>
            <label className="block font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border-gray-300 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
