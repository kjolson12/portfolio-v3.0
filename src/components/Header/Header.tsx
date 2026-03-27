import './Header.css';

export default function Header () {
    return (
    <header>
        <div id="name-home-link-container">
            <a id="name-home-link" href='./'>Kyle Olson</a>
        </div>
        <nav id="main-nav">
            <a className="main-nav-link" href="#experience">Experience</a>
            <a className="main-nav-link" href="#professional">Professional Work</a>
            <a className="main-nav-link" href="#personal">Personal Work</a>
            <a className="main-nav-link" href="#about">About</a>
        </nav>
        <div>
            <button className='button'>
                Download Resume
                <i id="resume-download-icon" className="bi bi-download"></i>
            </button>
        </div>
    </header>
    );
};