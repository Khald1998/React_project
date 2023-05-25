import LinkCSS from "../Style/Link.module.css"
function Link(props) {
  return (
    <>
      <div className= {`${LinkCSS.link} col-md-2`}>
        <h6 className="text-uppercase font-weight-bold">
          <a href="#!" className="text-white text-decoration-none" >
            {props.name}
          </a>
        </h6>
      </div>
    </>
  );
}
export default Link;
