import Link from "./Link";
function Links(props) {
  return (
    <>

      <div className={`w-full max-sm:pt-2 max-sm:pb-4 bg-nav ${props.toggled?'max-sm:absolute max-sm:top-full':'max-sm:absolute  max-sm:-top-96'} transition-all ease-in-out duration-300`}>
        <ul className="max-sm:w-[89%] max-sm:mx-auto font-medium flex flex-col max-sm:p-4 xl:p-0  max-sm:border max-sm:border-secondary max-sm:rounded-lg bg-prime xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-inherit ">
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
