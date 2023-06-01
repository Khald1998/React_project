import Icon from "./Icon.jsx";
function Icons() {
  return (
    <>
      <section className="text-center flex flex-row justify-center items-center 
      max-md:my-5
      md:my-10

      ">
        <Icon name="Github" href = "https://github.com/Khald1998" />
        <Icon name="Whatsapp" href = "https://api.whatsapp.com/send?phone=966580599359" />
        <Icon name="Linkedin" href = "http://www.linkedin.com/in/khaled-al-zahrani" />
        <Icon name="Twitter" href = "https://twitter.com/KhaledALz1998" />
      </section>
    </>
  );
}
export default Icons;
