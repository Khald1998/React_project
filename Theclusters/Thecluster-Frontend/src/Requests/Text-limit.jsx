function Text(props) {
  return (
    <>
      <p className={props.className}>
        {props.text.length > props.limit
          ? props.text.substring(0, props.limit) + " ...."
          : props.text}
      </p>
    </>
  );
}

export default Text;
