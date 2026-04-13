import { useOnInView } from "react-intersection-observer";

import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Experience from './components/Experience/Experience';
import Professional from './components/Professional/Professional';
import Personal from './components/Personal/Personal';
import Footer from './components/Footer/Footer';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const typewriterRef = useOnInView((inView, entry) => {
    if (inView) {
      configTypewriterEffect(entry.target as HTMLElement);
    }
  });

  const configTypewriterEffect = (element: HTMLElement) => {
    const characterCount = element.textContent?.length || 0;
    const animationDuration = characterCount * 0.08; // Adjust the multiplier for speed

    element.style.setProperty('animation', `typing ${animationDuration}s steps(${characterCount}, end) forwards, blink-caret .75s step-end infinite`);
  };

  return (
    <>
      <Header />

      <section>
        <div className="container">
          <Bio configTypewriterEffect={configTypewriterEffect} />
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <div className="typewriter-container">
            <h2 ref={typewriterRef} className="typewriter">Experience</h2>
          </div>
          <Experience />
        </div>
      </section>

      <section id="professional">
        <div className="container">
          <Professional />
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
