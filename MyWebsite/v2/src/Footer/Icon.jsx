import { FaGithub,FaWhatsapp,FaLinkedin,FaTwitter } from "react-icons/fa";
import { useState } from "react";

function Icon(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconStyle = {
    position: "relative",
    top: 0,
    left: 0,
    transform: `scale(${isHovered ? 1.2 : 1})`,
    transition: "transform 0.3s ease-in-out",
  };

  let icon = null;
  switch (`Fa${props.name}`) {
    case 'FaGithub':
      icon = <FaGithub size="1.75em" style={iconStyle} />;
      break;
    case 'FaWhatsapp':
      icon = <FaWhatsapp size="1.75em" style={iconStyle} />;
      break;
    case 'FaLinkedin':
      icon = <FaLinkedin size="1.75em" style={iconStyle} />;
      break;
    case 'FaTwitter':
      icon = <FaTwitter size="1.75em" style={iconStyle} />;
      break;
    default:
      break;
  }

  return (
    <>
      <a
        href={props.href}
        className="text-white mx-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon}
      </a>
    </>
  );
}

export default Icon;
