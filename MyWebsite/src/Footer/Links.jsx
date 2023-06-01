import Link from "./Link.jsx";
function Links() {
  return (
    <>
      <section className="w-4/6 mx-auto
      md:my-10
      ">
        <div className="flex text-center flex-row justify-center items-center
        max-md:flex-col
        ">
          <Link name="About" link="#About" />
          <Link name="Work" link="#About"/>
          <Link name="Contact me" link="#About"/>
          <Link name="Source Code" link="#About"/>
        </div>
      </section>
    </>
  );
}

export default Links;
