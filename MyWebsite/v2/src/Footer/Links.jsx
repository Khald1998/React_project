import Link from "./Link.jsx";
function Links() {
  return (
    <>
      <section className="pt-5 mb-10 w-4/6 mx-auto">
        <div className="pt-5 flex text-center flex-row justify-center items-center
        max-md:flex-col
        ">
          <Link name="ABOUT" />
          <Link name="WORK" />
          <Link name="CONTACT" />
          <Link name="SOURCE CODE" />
        </div>
      </section>
    </>
  );
}

export default Links;
