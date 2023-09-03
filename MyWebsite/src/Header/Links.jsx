import Link from "./Link";
function Links(props) {
  return (
    <>
      <div className={` ${props.ScreenMode=='big'?"flex items-center px-5 md:px-0 text-lg":"flex flex-col justify-start items-start text-start"}
      xl:px-0
      `}>
        <Link text="Home" link="#Home" />
        <Link text="About me" link="#About"/>
        <Link text="Skills" link="#Skills"/>
        <Link text="Education" link="#Education"/>
      </div>
    </>
  );
}

export default Links;
