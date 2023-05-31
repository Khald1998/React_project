import LinkCSS from "../Style/Link.module.css"
function Link(props) {
  return (
    <>
      <div className= {`${LinkCSS.link} w-full max-md:my-2`}>
        <h6 className="uppercase font-bold">
          <a href="#!" className="text-whitey no-underline" >
            {props.name}
          </a>
        </h6>
      </div>
    </>
  );
}
export default Link;
