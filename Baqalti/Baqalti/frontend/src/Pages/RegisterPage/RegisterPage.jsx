import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
const reg = import.meta.env.VITE_URL || 'http://localhost:8080';

function RegisterPage() {
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const phone = formData.get("phone");

    // Make a POST request to the server
    fetch(`${reg}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
        phone: phone,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          setShowWarning(true);
        } else {
          setShowWarning(false);
          navigate('/Profile')
        }
        console.log(response.status)
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/4">
        <h2 className="text-2xl font-bold mb-4">Register </h2>
        {showWarning && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
            role="alert"
          >
            <p className="font-bold">Error</p>
            <p>Invalid email or password.</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border-2 border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="border-2 border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border-2 border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter your phone"
              className="border-2 border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="border-2 border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
