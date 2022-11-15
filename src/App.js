import About from "./components/About";
import Contact from "./components/Contact";
import GithubCalender from "./components/GithubCalender";
import GithubStats from "./components/GithubStats";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <GithubCalender/>
      <GithubStats/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
