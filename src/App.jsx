import Skills from "./components/Skills/skills";
import Intro from "./components/intro/intro";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
     <Intro />
     <Skills />
     <ProjectList />
     <Contact />
    </div>
  );
}

export default App;
