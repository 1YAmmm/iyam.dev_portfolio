import { useEffect } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'

import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import TechStack  from './components/TechStack'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  // Attach scroll-triggered fade-in observer
  useScrollAnimation()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
