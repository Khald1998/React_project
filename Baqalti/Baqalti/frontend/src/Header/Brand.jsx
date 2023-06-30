import Logo from '../assets/brand.svg';
function Brand() {
  return (
    <>
      <div className="">
        <a href="/" className="flex items-center justify-between gap-x-2 max-sm:px-2 max-sm:py-1">
            <img className='h-14 w-auto' src={Logo} alt="Logo" />
          <span className="max-sm:font-semibold max-sm:text-xl">
            Baqalti
          </span>
        </a>
      </div>
    </>
  );
}

export default Brand;
