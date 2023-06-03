import Introduction from './Pages/Introduction/main'
import About from './Pages/About/main'
import Skills from './Pages/Skills/main'
import Header from './Header/main'
import Education from './Pages/Education/main'
import Footer from './Footer/main'
import Built from './Pages/Built/main'
import { useEffect } from 'react'

function App() {
  useEffect(()  => {
    document.body.classList.add('bg-prime');
    document.documentElement.classList.add('scroll-smooth');
    return () => {
        document.body.classList.remove('bg-prime');
        document.documentElement.classList.remove('scroll-smooth');
    };
  }, []); // Don't forget to add an empty dependencies array so this effect runs only once!


  return (
    <>
      <Header/>
      <Introduction/>
      <About/>
      <Skills/>
      <Education/>
      {/* <Built/> */}
      <Footer/>
    </>
  )
}

export default App
