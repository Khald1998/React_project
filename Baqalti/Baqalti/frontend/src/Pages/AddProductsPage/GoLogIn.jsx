import { useNavigate } from "react-router-dom";

function GoLogIn() {
    const navigate = useNavigate();

    const handelClick = () => {
        navigate('/Login')
      };

  return (
    <>
      <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 my-5 ">
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
    </>
  );
}

export default GoLogIn;
