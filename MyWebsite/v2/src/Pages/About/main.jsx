import Left from "./Left";
import Right from "./Right";
//flex-col md:flex-row
function main() {
  return (
    <>
      <section className="bg-second grid grid-raws-2 
      md:grid-cols-12 
      lg:grid-cols-12">
      <Left/>
      <Right/>
      </section>
      <hr class="h-px w-2/6 bg-white-200 border-1 absolute mx-auto left-0 right-0 opacity-40"/>

    </>
  );
}

export default main;
