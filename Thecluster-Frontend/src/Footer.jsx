import "./Footer.css";
function Footer() {
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
              <p className="col">Copyright © Khaled Alzahrani 2023.</p>
            </div>
          </div>
      </footer>

  );
}

export default Footer;
