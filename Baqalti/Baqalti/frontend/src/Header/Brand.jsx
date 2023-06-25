import Logo from '../assets/brand.svg';
function Brand() {
  return (
    <>
      <div className="">
        <a href="/" className="flex items-center justify-between gap-x-2">
            <img className='h-14 w-auto' src={Logo} alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Baqalti
          </span>
        </a>
      </div>
    </>
  );
}

export default Brand;
