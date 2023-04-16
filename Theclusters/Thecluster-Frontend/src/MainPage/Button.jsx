function Button(props) {
  return (
    <>
      <div className="col-2 my-1 ">
        <button
          name={props.name}
          value={props.value}
          className="text-center  btn btn-info"
        >
          {props.name}
        </button>
      </div>
    </>
  );
}

export default Button;
