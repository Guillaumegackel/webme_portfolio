import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import OneMoreThing from "./components/OneMoreThing";
import randomPage from "./components/RandomPage";

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <OneMoreThing/>
      <Contact />
      <randomPage />
    </div>
  );
}

export default App;
