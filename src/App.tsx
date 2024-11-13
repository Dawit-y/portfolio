import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./data";

function App() {
  return (
    <main className="relative bg-black-100 text-white flex flex-col justify-center items-center overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
      </div>
    </main>
  );
}

export default App;
