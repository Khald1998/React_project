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
          className="block transition-all ease-in-out duration-300
          max-sm:p-2 max-sm:text-white max-sm:hover:text-nav-text max-sm:rounded max-sm:hover:bg-white
           
          xl:bg-transparent xl:border-0 xl:text-black xl:hover:text-prime xl:p-0"
        >
          {props.text}
        </a>
      </li>
    </>
  );
}

export default Link;
