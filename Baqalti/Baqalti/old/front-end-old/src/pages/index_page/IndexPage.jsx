import { useEffect, useState } from "react";
import StoreProducts from "./components/storeProducts";
import axios from "axios";

const IndexPage = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function fetchStores() {
      const stores = await axios.get("/stores");
     
      setStores(stores.data);
    }
  
  
    fetchStores()
  },[]);
    
  return (
    <div className="w-full">
      {stores.length == 0 ? <div className=" text-gray-500 text-4xl font-bold w-full mt-56 flex justify-center">Loading...</div>: stores.map((store) => {
        if (store.products.length > 0)
        return (
          <StoreProducts key={store._id} storeData={store} />
        );
      }
      )}
    </div>
  );
};

export default IndexPage;
