import { useEffect } from "react";

export const useScrollEffect = (setIsTop) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTop(scrollTop === 0);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [setIsTop]);
};

// export const useDarkMode = (darkMode, setDarkMode) => {
//   useEffect(() => {
//     // Update the dark mode class on the body element
//     document.documentElement.classList.toggle('dark', darkMode);

//     // Save the dark mode preference in localStorage
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode, setDarkMode]);
// };

export const useDarkMode = (darkMode, setDarkMode) => {
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
};

// Custom hook for smooth scrolling
export const useSmoothScroll = () => {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);
};
