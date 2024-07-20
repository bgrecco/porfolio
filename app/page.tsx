import About from "./_sections/About";
import Skills from "./_sections/Skills";
import Contact from "./_sections/Contact";
import Projects from "./_sections/Projects";

export default function Home() {
  return (
    <div className="mr-2">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
