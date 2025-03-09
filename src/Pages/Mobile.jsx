import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Programming from "../Components/Programming";

const Mobile = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="h-screen flex items-center justify-center snap-start">
        <Hero />
      </section>
      <section className="h-screen flex items-center justify-center snap-start">
        <About />
      </section>
      <section className="h-screen flex items-center justify-center snap-start">
        <Experience />
      </section>
      <section className="h-screen flex items-center justify-center snap-start">
        <Projects />
      </section>
      <section className="h-screen flex items-center justify-center snap-start">
        <Programming />
      </section>
      <section className="h-screen flex items-center justify-center snap-start">
        <Skills />
      </section>
      <section className="h-screen flex items-center justify-center snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Mobile;
