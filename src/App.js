import './App.css'
import About from './components/About.jsx'
import Certifcation from './components/Certification';
import Introduction from './components/Intro';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Certification from './components/Certification';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
        <div id="colorlib-page">
          <div id="container-wrap">    
          <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>    
            <Sidebar></Sidebar>
            <div id="colorlib-main">
              <About></About>
              <Certification></Certification>
              <Education></Education>
              <Timeline></Timeline>
              <Projects></Projects>
            </div>
          </div>
        </div>    
  );
}

export default App;
