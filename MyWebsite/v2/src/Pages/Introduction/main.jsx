import Headline from "./headline";
function main() {
  return (
    <>
      <section className="bg-emerald-950 h-screen w-full bg-img-pattern bg-center bg-no-repeat bg-[length:105%_105%] flex justify-center items-center sticky top-0 z-negative">
        <Headline />
      </section>
      <div className="bg-black h-screen w-full"></div>
    </>
  );
}

export default main;
