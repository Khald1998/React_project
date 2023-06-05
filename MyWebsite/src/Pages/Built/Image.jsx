function Image() {
  return (
    <>
      <div className=" absolute flex justify-center items-center
      max-md:hidden
      md:h-5/6 md:w-3/4
      lg:justify-start lg:h-3/4
      xl:h-5/6
      ">
        <div className="bg-gray-500 rounded-md
        md:h-[40%] md:w-9/12 md:mr-10
        min-[850px]:h-[50%]
        lg:h-[65%]
        xl:h-[65%]
        "></div>
      </div>
    </>
  );
}

export default Image;
