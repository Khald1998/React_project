function Image() {
  return (
    <>
      <div className=" absolute flex justify-center items-center
      max-md:hidden
      md:w-3/4 md:h-5/6 
      lg:justify-start lg:h-3/4
      xl:h-5/6
      ">
        <div className="bg-gray-500 rounded-md
        md:aspect-[4/3] md:w-9/12 md:mr-10
        min-[850px]:aspect-[4/3]
        lg:w-[70%] lg:aspect-[16/10]
        xl:w-[80%] xl:aspect-[16/10]
        "></div>
      </div>
    </>
  );
}

export default Image;
