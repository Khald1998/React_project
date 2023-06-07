function BuiltHeadline() {
  return (
    <>
      <div
        className="text-whitey mx-auto w-full text-center 
      xxs:h-[12%]
      sm:w-full 
      md:w-4/6 
      lg:h-1/4 lg:w-full
      "
      >
        <div className="h-1/2 flex justify-center items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-second ">
            Some Things I’ve Built
          </h2>
        </div>
        <div className="h-1/2 flex justify-center items-center"> 
        <h3 className="text-base sm:text-lg md:text-xl ">
          Visit my GitHub for more details.
        </h3>
        </div>
      </div>
    </>
  );
}

export default BuiltHeadline;
