import Logo from "../assets/MC.svg";

function BrandIcon() {
  return (
    <>
      <div className="flex justify-center items-center pt-10 mb-10">
        <div className="flex justify-center items-center">
          <img className="h-auto w-7/12" src={Logo} alt="Icon" />
        </div>
      </div>
    </>
  );
}
export default BrandIcon;
