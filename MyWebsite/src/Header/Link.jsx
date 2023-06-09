function Link(props) {
  return (
    <>
      <div className="max-md:pl-0 max-md:my-1  px-5 hover:text-tertiary transition-all duration-400">
        <a href={props.link}>{props.text}</a>
      </div>
    </>
  );
}

export default Link;
