import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Certificates,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from './components'
import ActiveSectionContextProvider from './context/active-section-context'

const style = {
  wrapper: `relative z-0 bg-primary`,
  nav_con: `bg-hero-pattern bg-cover bg-center bg-no-repeat`,
}

function App() {
  return (
    <BrowserRouter>
      <ActiveSectionContextProvider>
        <div className={style.wrapper}>
          <div className={style.nav_con}>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certificates />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </ActiveSectionContextProvider>
    </BrowserRouter>
  )
}

export default App;
