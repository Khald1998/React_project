import React from "react";
import Link from "./Links";
import Brand from "./Brand";
import { Divide as Hamburger } from "hamburger-react";
import { useScrollEffect } from "../Utility";
import DarkModeButton from "./DarkModeButton";

function Main({ darkMode, setDarkMode }) {
  const [isTop, setIsTop] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);

  useScrollEffect(setIsTop);


  // Define className variables
  const section_animation = ` transition-all duration-200 `;
  const section_style = `${isTop ? "" : "md:mt-5"} md:flex md:justify-center`;
  const section = section_animation + section_style;
  const nav_color_dark = ` dark:text-whitey ${isTop ? "dark:border-nav-dark-border" : "dark:bg-nav-dark dark:border-nav-dark-border"}`;
  const nav_color_light = ` text-blacky ${isTop ? "border-nav-light-border" : "bg-nav-light border-nav-light-border"}`;
  const nav_animation = ` transition-all duration-200`;
  const nav_style = ` fixed z-50 ${isTop ? "border-none" : "backdrop-blur md:rounded-3xl md:border-[1px]"} md:flex md:items-center`;
  const nav_size = ` w-full ${isOpen ? "h-[200px]" : "h-[65px]"}  md:w-10/12`;
  const nav = nav_color_dark + nav_color_light + nav_animation + nav_style + nav_size;
  const content_style = "max-md:py-2 max-md:px-6 md:w-full md:px-6 xl:px-16";
  const content = content_style;
  const PC_style = "flex items-center justify-between ";
  const PC = PC_style;
  const Phone_style = ` absolute md:hidden ${isOpen ? "top-[62px]" : "top-[-300px]"} `;
  const Phone_size = `w-full `;
  const Phone_animation = ` transition-all duration-200 `;
  const Phone = Phone_style + Phone_size + Phone_animation;

  return (
    <>
      <section className={section}>
        <nav className={nav }>
          <div className={content}>
            <div className={PC}>
              <Brand />
              <div className="max-md:hidden flex flex-row space-x-2">
                <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
                <Link ScreenMode="big" />
              </div>
              <div className="md:hidden flex flex-row space-x-2">
                <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            </div>
            <div className={Phone}>
              <Link ScreenMode="small" />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Main;
