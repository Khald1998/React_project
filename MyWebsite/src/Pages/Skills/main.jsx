import SkillsHeadline from "./SkillsHeadline";
import SkillsArea from "./SkillsArea";
function main() {
  return (
    <>
      <section id="Skills" className="bg-second w-full relative
      xxs:pb-28 
      xs:pb-28 
      sm:pb-28 
      md:pb-28 
      lg:pb-28
      xl:h-[100lvh] 
      ">
        <SkillsHeadline/>
        <SkillsArea/>
        <hr className="h-px w-2/6 bg-white-200 border-1 absolute mx-auto left-0 right-0 bottom-0 opacity-40"/>
      </section>
    </>
  );
}

export default main;
