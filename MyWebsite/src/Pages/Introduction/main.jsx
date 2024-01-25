import React from 'react';
import Headline from "./Headline";

function Main() {
  // Define className variables
  const main_color_dark = `dark:bg-prime-dark`; // Dark mode class
  const main_color_light = `bg-prime-light`; // Light mode class
  const main_animation = ` `; // Animation class
  const main_style = `flex justify-center items-center sticky top-0 z-negative bg-img-pattern bg-center bg-no-repeat`; // Common style
  const main_size = `h-[100vh] w-full bg-[length:105%_105%]`; // Size related classes
  // Combined class string
  const main_class = `${main_color_dark} ${main_color_light} ${main_animation} ${main_style} ${main_size}`;

  return (
    <>
      <section id="Home">
        <div className={main_class}>
          <Headline />
        </div>
      </section>
    </>
  );
}

export default Main;
