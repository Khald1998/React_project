import CR from "./CR.jsx";
import Icons from "./Icons.jsx";
import Links from "./Links.jsx";
function Footer() {
  return (
    <footer className="text-center text-white mt-auto" style={{ backgroundColor: "#1E2022" }}>
      <div className="container">
        <Links />
        <hr className="my-5" />
        <Icons />
      </div>
      <CR />
    </footer>
  );
}

export default Footer;
