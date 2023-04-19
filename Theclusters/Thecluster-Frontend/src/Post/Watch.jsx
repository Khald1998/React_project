function Watch(props) {
  return (
    <>
      <h2
        className="d-inline-block col-6 lead text-center"
        style={{ color: props.timeColor }}
      >
        <strong>{props.timeString}</strong>
      </h2>
    </>
  );
}

export default Watch;
