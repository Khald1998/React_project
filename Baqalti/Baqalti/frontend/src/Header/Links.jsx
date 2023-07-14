import Link from "./Link";
function Links(props) {
  return (
    <>

      <div className={`w-full bg-nav transition-all ease-in-out duration-300  
      max-sm:pt-2 max-sm:pb-4  ${props.toggled?'max-sm:absolute max-sm:top-full':'max-sm:absolute max-sm:-top-96'}
      
      `}>
        <ul className="flex flex-col font-medium xl:flex-row  
        max-sm:w-[89%] max-sm:mx-auto max-sm:p-4 max-sm:border max-sm:border-secondary max-sm:rounded-lg max-sm:bg-prime 
        xl:p-0 xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-inherit
        ">
          <Link text="Home" link="/" />
          <Link text="About us" link="/AboutUs" />
          <Link text="Register" link="/Register" />
          <Link text="Login" link="/Login" />
          <Link text="Logout" link="/Logout" />
          <Link text="Profile" link="/Profile" />
          <Link text="Add Products" link="/AddProducts" />
          <Link text="View Products" link="/ViewProducts" />
        </ul>
      </div>

    </>
  );
}

export default Links;
