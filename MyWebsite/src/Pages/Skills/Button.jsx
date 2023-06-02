function Button(props) {
  return (
    <>
      <div className="mx-auto w-6/12 text-center flex justify-center items-center">
        <button
          onClick={props.onClick}
          className="bg-inherit hover:bg-tertiary hover:border-tertiary text-whitey hover:text-second py-2 px-4 border-2 transition-all duration-500 max-w-[90%]"
        >
          {props.text}
        </button>
      </div>
    </>
  );
}

export default Button;
