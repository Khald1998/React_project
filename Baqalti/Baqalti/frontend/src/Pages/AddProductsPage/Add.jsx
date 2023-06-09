import axios from "axios";
import Cookies from "universal-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const add = import.meta.env.VITE_URL || 'http://localhost:8080';

function Add() {
  const cookies = new Cookies();
  const token = cookies.get("token"); // Replace 'jwtToken' with the name of your JWT token cookie

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      cost: cost,
      quantity: quantity
    };
    console.log(data)
    axios
      .post(`${add}/Add`, data, {
        headers: {
          Authorization: `Bearer ${token}`, // Replace with the function that retrieves the token from the cookie
        },
      })
      .then(Response => {
        console.log(Response.status);
        navigate('/ViewProducts')
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Add Products</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded px-2 py-1 w-full"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cost" className="block mb-1 font-medium">
            Cost:
          </label>
          <input
            type="number"
            id="cost"
            className="border border-gray-300 rounded px-2 py-1 w-full"
            required
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-1 font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            className="border border-gray-300 rounded px-2 py-1 w-full"
            required
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </>
  );
}

export default Add;
