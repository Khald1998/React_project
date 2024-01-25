import Left from "./Left";
import Right from "./Right";

function main() {
  const About_color_dark = " dark:bg-second-dark"
  const About_color_light = " bg-second-light"
  const About_style =" grid grid-raws-2 relative md:grid-cols-12  lg:grid-cols-12 "
  const About = About_color_dark+About_style+About_color_light
  const Line = "h-px w-2/6 bg-white-200 border-1 absolute mx-auto left-0 right-0 bottom-0 opacity-40"
  return (
    <>
      <section id="About" className={About}>
      <Left/>
      <Right/>
      <hr className={Line}/>
      </section>
      

    </>
  );
}

export default main;
