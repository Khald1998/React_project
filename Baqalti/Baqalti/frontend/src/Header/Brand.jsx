import Logo from '../assets/brand.svg';
function Brand() {
  return (
    <>
      <div className="">
        <a href="/" className="flex items-center justify-between 
        
        ">
          <img className='w-auto pr-2

          sm:h-12

          md:h-12

          big:h-12

          lg:h-10

          xl:h-10 
          ' src={Logo} alt="Logo" />
          <span className="font-semibold 

          sm:text-lg
          
          md:text-xl

          big:text-xl
          
          lg:text-xl

          xl:text-xl">
            Baqalti
          </span>
        </a>
      </div>
    </>
  );
}

export default Brand;
