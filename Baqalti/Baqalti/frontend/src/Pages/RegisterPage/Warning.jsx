function Warning(props) {
  return (
    <>
        <div
          className="bg-red-100 max-sm:p-4 max-sm:mx-4 xl:mx-14 xl:p-4 text-red-700 rounded-3xl"
          role="alert"
        >
          <p className="font-bold"> {props.amount} Error{props.amount>1?'s':''}</p>
          <p>Invalid input{props.amount>1?'s':''} </p>
        </div>
    </>
  );
}

export default Warning;
