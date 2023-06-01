import Left from "./Left";
import Right from "./Right";
//flex-col md:flex-row
function main() {
  return (
    <>
      <section id="About" className="bg-second grid grid-raws-2 relative
      md:grid-cols-12 
      lg:grid-cols-12">
      <Left/>
      <Right/>
      <hr className="h-px w-2/6 bg-white-200 border-1 absolute mx-auto left-0 right-0 bottom-0 opacity-40"/>
      </section>
      

    </>
  );
}

export default main;
