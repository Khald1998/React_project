function Link(props) {
  return (
    <>
      <div className="px-5 hover:text-tertiary transition-all duration-400">
        <a href={props.link}>{props.text}</a>
      </div>
    </>
  );
}

export default Link;
