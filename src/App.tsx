import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
