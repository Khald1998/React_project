import CR from "./CR.jsx";
import Icons from "./Icons.jsx";
import Links from "./Links.jsx";

function main() {
  return (
    <footer className="bg-footer w-full">
      <Links />
      <hr className="my-5 text-white mx-auto w-4/6" />
      <Icons />
      <hr className="my-5 text-white mx-auto w-4/6" />
      <CR />
    </footer>
  );
}
export default main;
