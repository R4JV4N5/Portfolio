import './App.css'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        {/* Section divider */}
        <div className="divider" style={{ margin: '0 clamp(20px, 8vw, 120px)' }} />

        <About />

        <div className="divider" style={{ margin: '0 clamp(20px, 8vw, 120px)' }} />

        <Skills />

        <div className="divider" style={{ margin: '0 clamp(20px, 8vw, 120px)' }} />

        <Projects />

        <div className="divider" style={{ margin: '0 clamp(20px, 8vw, 120px)' }} />

        <Experience />

        <div className="divider" style={{ margin: '0 clamp(20px, 8vw, 120px)' }} />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
