function Link(props) {
  return (
    <>
      <div className=" px-5">
        <a href={props.link}>{props.text}</a>
      </div>
    </>
  );
}

export default Link;
