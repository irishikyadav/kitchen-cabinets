// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Materials from "./components/Materials";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-indigo-50 text-slate-800">
      {/* subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,119,198,0.1))] pointer-events-none" />
      
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-24 space-y-28">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="materials">
          <Materials />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
