function Button(props) {
  return (
    <>
      <div className=" d-inline-block col-6 my-1">
        <button value={props.value} onClick={props.onClick} type="button" className="">
          {props.text}
        </button>
      </div>
    </>
  );
}

export default Button;
