import Link from "./Link";
function Links(props) {
  console.log(props.toggled)
  return (
    <>

      <div className={`w-full bg-nav transition-all ease-in-out duration-300    

      mobs:py-2

      mobm:py-2

      mobl:py-2

      sm:py-2
      
      md:py-2
      ${props.toggled?'max-big:absolute max-big:top-full':'max-big:absolute max-big:-top-96'}
      
      `}>
        <ul className="flex flex-col font-medium  
        
        mobs:border-secondary mobs:rounded-lg mobs:px-4 mobs:py-4 mobs:mx-auto mobs:w-[85%] mobs:bg-prime mobs:border

        mobm:border-secondary mobm:rounded-lg mobm:px-4 mobm:py-4 mobm:mx-auto mobm:w-[85%] mobm:bg-prime mobm:border

        mobl:border-secondary mobl:rounded-lg mobl:px-4 mobl:py-4 mobl:mx-auto mobl:w-[85%] mobl:bg-prime mobl:border

        sm:border-secondary sm:rounded-lg sm:px-4 sm:py-4 sm:mx-auto sm:w-[85%] sm:bg-prime sm:border

        md:rounded-lg md:border-secondary md:w-[85%] md:mx-auto md:bg-prime md:px-4 md:py-2

        big:flex-row big:w-full big:p-0 big:space-x-0  big:bg-inherit big:border-0

        lg:flex-row lg:w-full lg:border-0 lg:mt-0 lg:p-0 lg:space-x-4

        xl:flex-row xl:p-0 xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-inherit xl:w-full
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
