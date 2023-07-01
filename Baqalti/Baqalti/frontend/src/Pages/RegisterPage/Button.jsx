function Button(props) {
  const handleSubmit = () => {
    // Perform form submission logic here
    console.log(`submit is ${props.state}!`);
  };
  return (
    <>
      <div className="mt-6">
        <button
          className="bg-white border-2 border-prime text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-prime hover:text-white transition-all ease-in-out duration-300"
          onClick={handleSubmit}
          // onClick={props.onClick}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Button;
