function Link(props) {
  return (
    <>
      <div className= {` w-full max-md:my-2`}>
        <h6 className="">
          <a href={props.link} className="transition-all duration-300 ease-in-out  text-secondary hover:text-prime hover:font-bold no-underline" >
            {props.name}
          </a>
        </h6>
      </div>
    </>
  );
}
export default Link;
