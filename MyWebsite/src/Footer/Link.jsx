function Link(props) {
  return (
    <>
      <div className="col-md-2">
        <h6 className="text-uppercase font-weight-bold">
          <a href="#!" className="text-white">
            {props.name}
          </a>
        </h6>
      </div>
    </>
  );
}

export default Link;
