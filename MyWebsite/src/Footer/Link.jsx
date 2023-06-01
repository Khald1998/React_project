function Link(props) {
  return (
    <>
      <div className= {`drop-shadow-none transition-all duration-300 ease-in-out hover:drop-shadow-holy w-full max-md:my-2`}>
        <h6 className="">
          <a href={props.link} className="text-whitey no-underline" >
            {props.name}
          </a>
        </h6>
      </div>
    </>
  );
}
export default Link;
