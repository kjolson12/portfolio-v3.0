import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Experience from './components/Experience/Experience';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {

  return (
    <>
      <Header />

      <section>
        <div className="container">
          <Bio />
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <h2>Experience</h2>
          <Experience />
        </div>
      </section>
    </>
  );
};

export default App;
