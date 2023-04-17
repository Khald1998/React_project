// // import "./Style/Footer.css";
// // function Footer() {
// //   return (
// //     <footer className="footer mt-auto">
      
// //         <div className="container text-center">
// //             <div className="row pb-2 pt-4 item social">
// //               <div className="col item social ">
// //                 <a href="https://twitter.com/KhaledALz1998"><i className=" icon ion-social-twitter"></i></a>
// //                 <a href="http://www.linkedin.com/in/khaled-al-zahrani"><i className=" icon ion-social-linkedin"></i></a>
// //                 <a href="https://api.whatsapp.com/send?phone=966580599359"><i className=" icon ion-social-whatsapp"></i></a>
// //                 <a href="https://github.com/Khald1998"><i className=" icon ion-social-github"></i></a>
// //               </div>
// //             </div>
// //             <div className="row py-2">
// //               <p className="col">Copyright © Khaled Alzahrani 2023.</p>
// //             </div>
// //           </div>
// //       </footer>

// //   );
// // }

// // export default Footer;

// import React from "react";
// import { FaTwitter, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
// import "./Style/Footer.css";

// const COPYRIGHT_YEAR = 2023;

// function Footer() {
//   return (
//     <footer className="footer mt-auto">
//       <section className="container text-center">
//         <nav className="row pb-2 pt-4 item social">
//           <ul className="col item social">
//             <li>
//               <a href="https://twitter.com/KhaledALz1998" aria-label="Twitter">
//                 <FaTwitter />
//               </a>
//             </li>
//             <li>
//               <a href="http://www.linkedin.com/in/khaled-al-zahrani" aria-label="LinkedIn">
//                 <FaLinkedin />
//               </a>
//             </li>
//             <li>
//               <a href="https://api.whatsapp.com/send?phone=966580599359" aria-label="WhatsApp">
//                 <FaWhatsapp />
//               </a>
//             </li>
//             <li>
//               <a href="https://github.com/Khald1998" aria-label="GitHub">
//                 <FaGithub />
//               </a>
//             </li>
//           </ul>
//         </nav>
//         <div className="row py-2">
//           <p className="col">
//             &copy; Khaled Alzahrani {COPYRIGHT_YEAR}.
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }

// export default Footer;

import "./Style/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto">
      <div className="container text-center">
        <div className="row pb-2 pt-4 item social">
          <div className="col item social ">
            <a href="https://twitter.com/KhaledALz1998"><i className=" icon ion-social-twitter"></i></a>
            <a href="http://www.linkedin.com/in/khaled-al-zahrani"><i className=" icon ion-social-linkedin"></i></a>
            <a href="https://api.whatsapp.com/send?phone=966580599359"><i className=" icon ion-social-whatsapp"></i></a>
            <a href="https://github.com/Khald1998"><i className=" icon ion-social-github"></i></a>
          </div>
        </div>
        <div className="row py-2">
          <p className="col">Copyright © Khaled Alzahrani {currentYear}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
