import CR from "./CR.jsx";
import Icons from "./Icons.jsx";
import Links from "./Links.jsx";
import BrandIcon from "./BrandIcon.jsx";

function main() {
  return (
    <footer className="bg-footer w-full">
      <BrandIcon/>
      <hr className="my-5 text-white mx-auto w-7/12" />
      <Links />
      <hr className="my-5 text-white mx-auto w-7/12" />
      <Icons />
      <hr className="my-5 text-white mx-auto w-7/12" />
      <CR />
    </footer>
  );
}
export default main;
