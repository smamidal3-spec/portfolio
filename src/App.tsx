import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Experiments from './components/Experiments';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111] font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Journey />
        <Experiments />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
