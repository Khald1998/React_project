import Introduction from './Pages/Introduction/main'
import About from './Pages/About/main'
import Skills from './Pages/Skills/main'
import Header from './Header/main'
import Education from './Pages/Education/main'
import Footer from './Footer/main'
import { useEffect } from 'react'

function App() {
  useEffect(()  => {
    document.body.classList.add('bg-prime');

    return () => {
        document.body.classList.remove('bg-prime');
    };
});

  return (
    <>
      <Header/>
      <Introduction/>
      <About/>
      <Skills/>
      <Education/>
      <Footer/>
    </>
  )
}

export default App
