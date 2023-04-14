// import React from "react";

// function Footer() {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer>
//       <p>Copyright ⓒ {currentYear}</p>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
