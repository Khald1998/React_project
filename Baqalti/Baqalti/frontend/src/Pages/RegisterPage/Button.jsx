function Button(props) {

  return (
    <>
      <div className="mt-6">
        <button
          className={`bg-white border-2 border-prime text-gray-800 font-bold py-2 px-4 rounded-full  transition-all ease-in-out duration-300 ${props.CSS}`}
          
          onClick={props.onClick}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Button;
