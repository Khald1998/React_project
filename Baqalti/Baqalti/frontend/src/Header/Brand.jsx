import Logo from '../assets/brand.svg';
function Brand() {
  return (
    <>
      <div className="">
        <a href="/" className="flex items-center justify-between 
        
        ">
            <img className='max-sm:h-14 xl:h-10 w-auto pr-2' src={Logo} alt="Logo" />
          <span className="font-semibold max-sm:text-xl xl:text-2xl">
            Baqalti
          </span>
        </a>
      </div>
    </>
  );
}

export default Brand;
