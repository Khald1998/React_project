import Cards from "./Cards";
import EducationHeadLine from "./EducationHeadLine";

function main() {
  return (
    <>
      <section id="Education" className="bg-second h-[100lvh] w-full flex flex-col justify-center items-center pt-20 relative">
        <EducationHeadLine />
        <Cards />
        <hr className="h-px w-2/6 bg-white-200 border-1 absolute mx-auto left-0 right-0 bottom-0 opacity-40"/>
      </section>
    </>
  );
}

export default main;
