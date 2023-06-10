function Button(props) {
  return (
    <>
      <div
        className={`md:hidden py-4 pb-20 mx-auto w-full flex justify-center items-center text-center bg-second 
         relative transition-all duration-500
         ${!props.mode?'xxs:mt-[280px]':'xxs:mt-[1150px]'}
         ${!props.mode?'sm:mt-[280px]':'sm:mt-[860px]'}
        `}>
          <button
            onClick={props.onClick}
            className="bg-inherit hover:bg-tertiary hover:border-tertiary text-whitey hover:text-second py-2 px-4 border-2 transition-all duration-500 w-32"
          >
            {props.text}
          </button>
      </div>
    </>
  );
}

export default Button;
