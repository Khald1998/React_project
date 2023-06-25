import Links from "./Links";
import Brand from "./Brand";
function Header() {
  return (
    <>
      <header>
        <nav className="bg-white ">
          <div className="flex items-center justify-between px-4 py-1">
            <Brand />
            <Links />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
