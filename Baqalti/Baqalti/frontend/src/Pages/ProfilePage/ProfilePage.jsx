import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const pro = import.meta.env.VITE_URL || 'http://localhost:8080';

function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [isLoged, setIsLoged] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("token"); 
  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/Login')

  };
  useEffect(() => {
    const getData = () =>{
    if (!token) {
      console.log("No token found in the cookie.");
      setIsLoged(true);
      return;
    }
    axios
      .post(`${pro}/profile`, null, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data); 
      })
      .catch((error) => console.error(error.code));
    }
    return () => getData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            {!isLoged &&<h1 className="text-3xl font-bold text-gray-900">Your profile</h1>}
            {!isLoged && profileData && (
              <div className="m-4">
                <p className="m-4"><span className = "font-bold"> Name:</span> {profileData.name}</p>
                <p className="m-4"><span className = "font-bold">Username:</span> {profileData.username}</p>
                <p className="m-4"><span className = "font-bold">Email:</span> {profileData.email}</p>
                <p className="m-4"><span className = "font-bold">Phone:</span> {profileData.phone}</p>
              </div>
            )}
            {isLoged && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 m-5 ">
                  You must be loged in!
                </h1>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handelClick}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
