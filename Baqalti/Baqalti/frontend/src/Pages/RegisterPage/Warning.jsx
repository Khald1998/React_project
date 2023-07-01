function Warning(props) {
  return (
    <>
        <div
          className="bg-red-100 mx-14 p-4 text-red-700 rounded-3xl"
          role="alert"
        >
          <p className="font-bold"> {props.amount} Error{props.amount>1?'s':''}</p>
          <p>Invalid input: <span className="font-bold">{props.error}</span></p>
        </div>
    </>
  );
}

export default Warning;
