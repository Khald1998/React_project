import Link from "./Link";
function Header() {
  return (
    <>
      <ul className="font-medium flex flex-row bg-white">
        <Link text='Home' link='/'/>
        <Link text='About us' link='/AboutUs'/>
        <Link text='Register' link='/Register'/>
        <Link text='Login' link='/Login'/>
        <Link text='Logout' link='/Logout'/>
        <Link text='Profile' link='/Profile'/>
        <Link text='Add Products' link='/AddProducts'/>
        <Link text='View Products' link='/ViewProducts'/>
      </ul>
    </>
  );
}

export default Header;
