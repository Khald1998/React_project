import React, { useState } from 'react';
import { useDarkMode, useSmoothScroll } from './Utility';
import Introduction from './Pages/Introduction/main';
import About from './Pages/About/main';
import Skills from './Pages/Skills/main';
import Header from './Header/main';
import Education from './Pages/Education/main';
import Footer from './Footer/main';
import Built from './Pages/Built/main';

function App() {
  // State for managing dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  // Use the custom hooks
  useDarkMode(darkMode, setDarkMode);
  useSmoothScroll();


  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Introduction darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Built darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
