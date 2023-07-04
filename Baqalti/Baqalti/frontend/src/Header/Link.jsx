import { useNavigate } from "react-router-dom";

function Link(props) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault(); // Prevents the default link behavior
    navigate(props.link); // Navigates to props.link
  };
  return (
    <>
      <li>
        <a
          href={props.link}
          onClick={handleClick} 
          className="block max-sm:py-2 sm:py-2 max-sm:px-4 sm:px-4 max-sm:text-white sm:text-white max-sm:hover:text-nav-text sm:hover:text-nav-text max-sm:rounded sm:rounded max-sm:hover:bg-gray-100 sm:hover:bg-gray-100 xl:bg-transparent xl:border-0 xl:text-black xl:hover:text-prime xl:p-0 transition-all ease-in-out duration-300"
        >
          {props.text}
        </a>
      </li>
    </>
  );
}

export default Link;
