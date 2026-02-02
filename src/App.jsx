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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* background art */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.08),_transparent_55%)]" />

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
