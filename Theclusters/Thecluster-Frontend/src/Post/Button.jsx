function Button(props) {
  return (
    <>
      <div className=" d-inline-block ms-lg-5 ms-md-5 mb-5">
        <button value={props.value} onClick={props.onClick} type="button" className={props.buttonS}>
          {props.text}
        </button>
      </div>
    </>
  );
}

export default Button;
