import './Header.css';

const headerLogoStart = "<";
const headerLogoEnd = "/>";

export default function Header () {
    return (
    <header>
        <div id="name-home-link-container">
            <a id="name-home-link" href='./' className='typewriter'>
                <span className='headerLogo'>{headerLogoStart}</span> Kyle Olson <span className='headerLogo'>{headerLogoEnd}</span>
            </a>
        </div>
        <nav id="main-nav">
            <a className="main-nav-link" href="#experience">Experience</a>
            <a className="main-nav-link" href="#professional">Professional Work</a>
            <a className="main-nav-link" href="#about">About</a>
            <a className="main-nav-link" href="#personal">Personal Projects</a>
        </nav>
        <div>
            <button className='button button-secondary'>
                Download Resume
                {/* <i id="resume-download-icon" className="bi bi-download"></i> */}
            </button>
        </div>
    </header>
    );
};