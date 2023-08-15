import Logo from "../assets/brand.svg";

function BrandIcon() {
  return (
    <>
      <div className="flex justify-center items-center pt-10 mb-10">
        <div className="flex justify-center items-center">
          <img className="h-auto mobs:w-14 sm:w-16 xl:w-3/12" src={Logo} alt="Icon" />
        </div>
      </div>
    </>
  );
}
export default BrandIcon;
