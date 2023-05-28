import Left from "./Left";
import Right from "./Right";
//flex-col md:flex-row
function main() {
  return (
    <>
      <section className="bg-second h-screen w-full grid grid-raws-2 lg:grid-cols-2">
      <Left/>
      <Right/>
      </section>
      
    </>
  );
}

export default main;
