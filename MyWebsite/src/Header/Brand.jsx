import Logo from "../assets/MC.svg";

function Brand() {
  return (
    <>
      <div className="flex items-center ">
        <span className="">
        <img className="h-8 w-auto" src={Logo} alt="Brand" />
        </span>
      </div>
    </>
  );
}

export default Brand;
