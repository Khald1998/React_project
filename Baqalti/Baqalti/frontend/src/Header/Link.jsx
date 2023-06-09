import { useLocation } from 'react-router-dom'

function Header(props) {
  const location = useLocation();
  return (
    <>
      <li>
        <a
          href={props.link}
          className={`block p-0 mx-2 text-gray-900 ${location.pathname!=props.link? 'hover:text-blue-700':'text-blue-700'}  `}
        >
          {props.text}
        </a>
      </li>
    </>
  );
}

export default Header;
