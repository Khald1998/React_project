import Link from "./Link";
function Links(props) {
  return (
    <>
      <div className={` ${props.mode=='max'?"flex items-center px-5 text-lg":"grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mt-5"}`}>
        <Link text="Doc1" />
        <Link text="Doc2" />
        <Link text="Doc3" />
        <Link text="Doc4" />
        <Link text="Doc5" />
      </div>
    </>
  );
}

export default Links;
