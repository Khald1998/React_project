import React, { useEffect, useState } from 'react';
import axios from 'axios';
const view = import.meta.env.VITE_URL || 'http://localhost:8080';
const ViewProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${view}/View`);
        setProducts(response.data);
      } catch (error) {
        console.log({'message':'Error fetching products:','Code': error.response.status});
      }
    };

    return () => fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-2xl font-bold mb-4 ">Products</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border p-4">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p><span className = "font-bold">Cost:</span> ${product.cost}</p>
              <p><span className = "font-bold">Quantity:</span> {product.quantity}</p>
              <p><span className = "font-bold">Owner:</span> {product.owner}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
    </div>
  );
  
};

export default ViewProductsPage;
