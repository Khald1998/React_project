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
          <Link name="Work" link="https://github.com/Khald1998"/>
          <Link name="Contact me" link="https://api.whatsapp.com/send?phone=966580599359"/>
          <Link name="Source Code" link="https://github.com/Khald1998/React_project/tree/main/MyWebsite"/>
        </div>
      </section>
    </>
  );
}

export default Links;
