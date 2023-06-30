
function Link(props) {
  return (
    <>
      <li>
        <a
          href={props.link}
          className={`block p-0 mx-2 text-gray-900 hover:text-blue-700`}
        >
          {props.text}
        </a>
      </li>
    </>
  );
}

export default Link;
