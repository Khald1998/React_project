import { useNavigate  } from "react-router-dom";
import Cookies from "universal-cookie";
const logout = import.meta.env.VITE_URL || 'http://localhost:8080';

function LogoutPage() {
  const navigate = useNavigate()
  const cookies = new Cookies();

  const handleLogout = () => {
    
    fetch(`${logout}/logout`, {
      method: 'POST'
    })
      .then(response => {
        if (response.status ==200) {
          console.log(response.status)
          cookies.remove('token')
          navigate('/')
        } else {
          console.log(response.status)
        }

      })
  };
  



  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center font-bold text-2xl">Are you sure you want to log out?</h2>
        <div className="flex justify-center">
          <button
            className="py-2 px-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
