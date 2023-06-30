function Button(props) {
  const handleSubmit = () => {
    // Perform form submission logic here
    console.log(`submit is ${props.state}!`);
  };
  return (
    <>
      <button
        className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
}

export default Button;
