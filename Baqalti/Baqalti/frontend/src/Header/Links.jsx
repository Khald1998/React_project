import Link from "./Link";
function Links(props) {
  return (
    <>

      <div className={`w-full max-sm:pt-2 max-sm:pb-4 sm:pt-2 sm:pb-4 bg-nav ${props.toggled?'max-md:absolute max-md:top-full':'max-md:absolute  max-md:-top-96'} transition-all ease-in-out duration-300 max-md:border-b-2 max-md:border-prime`}>
        <ul className="max-sm:w-[89%] sm:w-[89%] max-md:mx-auto font-medium flex flex-col max-sm:p-4 sm:p-4 xl:p-0  max-md:border max-md:border-secondary max-md:rounded-lg bg-prime xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-inherit ">
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
