import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import GoLogIn from "./GoLogIn";
import Add from "./Add";

function AddProductsPage() {
  const [isLoged, setIsLoged] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token"); // Replace 'jwtToken' with the name of your JWT token cookie

  useEffect(() => {
    const getData = () =>{
    if (!token) {
      console.log({'message':'No token found in the cookie.'});
      return;
    } else {
      console.log({'token':token});
      setIsLoged(true);
    }
  }
    return () => getData();
  }, []);

  return <div className="p-4">{isLoged ? <Add /> : <GoLogIn />}</div>;
}

export default AddProductsPage;
