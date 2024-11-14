import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./data";

function App() {
  document.title = "Dawit Yimer";
  return (
    <main className="relative bg-black-100 text-white flex flex-col justify-center items-center overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
