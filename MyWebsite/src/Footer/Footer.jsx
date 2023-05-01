import CR from "./CR.jsx";
import Icons from "./Icons.jsx";
import Links from "./Links.jsx";
import FooterCSS from "../Style/Footer.module.css"

function Footer() {
  return (
    <footer 
    className={`mt-auto ${FooterCSS.Footer_bg}`}>
      <div className="container">
        <Links />
        <hr className="my-5 text-white" />
        <Icons />
      </div>
      <CR />
    </footer>
  );
}
export default Footer;
