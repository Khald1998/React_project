import HeaderCSS from "../Style/Header.module.css";
function Link(props) {
  return (
    <>
      <li className="nav-item">
        <a className={HeaderCSS.text_nav + " nav-link"} href="#">
          {props.link}
        </a>
      </li>
    </>
  );
}

export default Link;
