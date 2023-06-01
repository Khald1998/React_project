function Button(props) {
  return (
    <>
      <div className="mx-auto w-6/12 text-center">
        <button
          onClick={props.onClick}
          className="bg-inherit hover:bg-whitey text-whitey hover:text-black py-2 px-4 mt-4 border-2 transition-all duration-500"
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default Button;
