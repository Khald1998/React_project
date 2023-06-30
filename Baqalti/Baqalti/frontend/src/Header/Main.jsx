import Links from "./Links";
import Brand from "./Brand";
function Main() {
  return (
    <>
      <header className="bg-nav absolute top-0 left-0 right-0 mx-auto">
        <nav className=" ">
          <div className="flex items-center justify-between ">
            <Brand />
            <Links />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Main;
