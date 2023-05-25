import Link from "./Link.jsx";
function Links() {
  return (
    <>
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
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
