import { useState } from 'react';

import BackgroundAnimation from './utils/BackgroundAnimation';
import TypewriterObserver from './utils/TypewriterObserver';
import ActiveSectionObserver from './utils/ActiveSectionObserver';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Experience from './components/Experience/Experience';
import Professional from './components/Professional/Professional';
import Skills from './components/Skills/Skills';
import Personal from './components/Personal/Personal';
import Footer from './components/Footer/Footer';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState<string>('bio');

  return (
    <>
      <BackgroundAnimation />
      <TypewriterObserver />
      <ActiveSectionObserver setActiveSection={setActiveSection} />
      
      <Header activeSection={activeSection} />

      <section id="bio">
        <div className="container">
          <Bio />
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <div className="typewriter-container">
            <h2 className="typewriter">Experience</h2>
          </div>
          <Experience />
        </div>
      </section>

      <section id="professional">
        <div className="container">
          <Professional />
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <Skills />
        </div>
      </section>

      <section id="personal">
        <div className="container">
          <Personal />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
