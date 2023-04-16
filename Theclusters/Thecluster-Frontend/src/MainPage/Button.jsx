// import { Link } from "react-router-dom";
function Button(props) {
  return (
    <>
      <div className="col-lg-2 col-6 my-4 ">
        <button
          name={props.name}
          onClick={props.onClick}
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
