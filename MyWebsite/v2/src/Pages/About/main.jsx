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
      
    </>
  );
}

export default main;
