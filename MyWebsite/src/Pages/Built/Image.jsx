function Image() {
  return (
    <>
      <div className=" absolute flex justify-center items-center
      max-md:hidden
      md:w-3/4 md:h-5/6 md:justify-start
      lg:justify-start lg:h-3/4
      xl:h-5/6
      ">
        <div className=" rounded-md img-shadow-smoth
        md:aspect-[16/10] md:w-9/12 
        lg:w-[75%] lg:aspect-[16/10]
        xl:w-[80%] xl:aspect-[16/10]
        ">
          <div className="w-full h-full "></div>
        </div>
      </div>
    </>
  );
}

export default Image;
