import CR from "./CR.jsx";
import Icons from "./Icons.jsx";
import Links from "./Links.jsx";
import BrandIcon from "./BrandIcon.jsx";

function Main() {
  return (
    <footer className="bg-nav w-full border-t-2 border-prime">
      <BrandIcon/>
      <hr className="my-5 border-t border-prime mx-auto w-7/12" />
      <Links />
      <hr className="my-5 border-t border-prime mx-auto w-7/12" />
      <Icons />
      <hr className="my-5 border-t border-prime mx-auto w-7/12" />
      <CR />
    </footer>
  );
}
export default Main;
