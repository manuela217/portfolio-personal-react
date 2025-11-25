import Header from "./components/Header";
import Hero from './components/Hero';
import AboutMe from './components/AboutMe'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App