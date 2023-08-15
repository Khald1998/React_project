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
          max-sm:p-2   

       sm:text-white sm:hover:text-nav-text sm:hover:bg-white sm:rounded sm:px-2 sm:py-1  
          
        md:text-white md:hover:text-nav-text md:hover:bg-white md:rounded md:px-2 md:py-1  

          big:text-base big:px-2

          lg:text-lg lg:p-0

          xl:bg-transparent xl:border-0 xl:text-black xl:hover:text-prime xl:p-0 xl:text-lg"
        >
          {props.text}
        </a>
      </li>
    </>
  );
}

export default Link;
