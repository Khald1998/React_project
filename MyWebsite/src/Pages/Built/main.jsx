import Image from "./image";
import Description from "./Description";
function main() {
  return (
    <>
      <section className="h-[100lvh] w-full bg-second flex justify-center items-center relative">
        <div className="h-3/4 w-3/4 relative">
            <Image/>
            <Description/>
        </div>
        <hr className="h-px w-2/6 bg-white-200 border-1 absolute mx-auto left-0 right-0 bottom-0 opacity-40"/>
      </section>
    </>
  );
}

export default main;
