import Image from "./image";
import Description from "./Description";
import BuiltHeadline from "./BuiltHeadline";
function main() {
  return (
    <>
      <section className="h-[100lvh] w-full bg-second flex justify-center items-center">
        <div
          className=" 
        xxs:h-5/6 xxs:w-5/6 xss:flex-col
        xs:w-11/12
        sm:w-10/12
        md:flex-row md:relative
        lg:w-10/12
        xl:w-[70%]"
        >
          <BuiltHeadline />
          <Image />
          <Description />
        </div>
      </section>
    </>
  );
}

export default main;
