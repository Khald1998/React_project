import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'


function Link(props) {
  const location = useLocation().pathname;
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
          className={`block transition-all ease-in-out duration-300
          max-sm:p-2   

          mobs:text-white mobs:hover:text-nav-text mobs:hover:bg-white mobs:rounded mobs:px-2 mobs:py-1

          mobm:text-white mobm:hover:text-nav-text mobm:hover:bg-white mobm:rounded mobm:px-2 mobm:py-1

        mobl:text-white mobl:hover:text-nav-text mobl:hover:bg-white mobl:rounded mobl:px-2 mobl:py-1

        sm:text-white sm:hover:text-nav-text sm:hover:bg-white sm:rounded sm:px-2 sm:py-1
          
        md:text-white md:hover:text-nav-text md:hover:bg-white md:rounded md:px-2 md:py-1  

          big:text-base big:px-2 big:text-black big:hover:text-prime big:hover:bg-inherit

          lg:text-lg lg:p-0

          xl:bg-transparent xl:border-0 xl:text-black xl:hover:text-prime xl:p-0 xl:text-lg

          ${props.link==location?"xl:text-prime":""}
          
          `}
        >
          {props.text}
        </a>
      </li>
    </>
  );
}

export default Link;
