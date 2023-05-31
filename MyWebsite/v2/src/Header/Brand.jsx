function Brand(props) {
  return (
    <>
      <div className="flex items-center ">
        <span className="font-semibold text-xl tracking-tight">
          {props.text}
        </span>
      </div>
    </>
  );
}

export default Brand;
