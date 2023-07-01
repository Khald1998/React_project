import Logo from '../assets/brand.svg';
function Brand() {
  return (
    <>
      <div className="">
        <a href="/" className="flex items-center justify-between">
            <img className='h-14 w-auto' src={Logo} alt="Logo" />
          <span className="max-sm:font-semibold max-sm:text-xl xl:text-2xl">
            Baqalti
          </span>
        </a>
      </div>
    </>
  );
}

export default Brand;
