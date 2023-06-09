
import {useContext, useEffect, useState} from "react";
import ProductCard from "./components/product_card";
import axios from "axios";
import { UserContext } from "../../UserContext";


const BasketPage = () => {

    const [basketItems,setBasketItems] = useState(null)
    const {user} = useContext(UserContext);
 
    useEffect(() => {

        // fetch basket items from server and update state
    async function fetchProducts()   {
      
     const products = await axios.get("/basket_products", {params: {userId: user._id}})
    
      setBasketItems(products.data);

        }

        fetchProducts();
        console.log("hi")
           
        
      },[user._id]);
      



    return (
        <div className=" w-full " > 
{basketItems == null ? <div className=" text-gray-500 text-4xl font-bold w-full mt-56 flex justify-center">Loading</div> : 
  basketItems.length == 0 ? <div className=" text-gray-500 text-4xl font-bold w-full mt-56 flex justify-center">You did not add products yet</div> :
   <div className="grid grid-cols-6 gap-2">
   { basketItems.map((item) => {
       return (
           <ProductCard key={item._id} itemData={item} /> 
       );
   })}
        
   </div>}
  
        </div>
     
    );

}

export default BasketPage;