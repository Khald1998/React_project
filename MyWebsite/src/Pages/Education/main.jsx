import Cards from "./Cards";
import EducationHeadLine from "./EducationHeadLine";

function main() {
  return (
    <>
      <section id="Education" className="bg-second h-[100svh] w-full flex flex-col justify-center items-center pt-20">
        <EducationHeadLine />
        <Cards />
      </section>
    </>
  );
}

export default main;
