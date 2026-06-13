import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AnimatedBackground from '../components/ui/AnimatedBackground'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Technologies from '../components/sections/Technologies'
import Services from '../components/sections/Services'
import Social from '../components/sections/Social'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Services />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
