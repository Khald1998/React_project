import Link from "./Link";
function Links(props) {
  return (
    <>
      <div className={` ${props.mode=='max'?"flex items-center px-5 text-lg":"grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mt-5"}`}>
        <Link text="Home" link="#Home" />
        <Link text="About me" link="#About"/>
        <Link text="Skills" link="#Skills"/>
        <Link text="Education" link="#Education"/>
        <Link text="Doc5" link="#Home"/>
      </div>
    </>
  );
}

export default Links;
