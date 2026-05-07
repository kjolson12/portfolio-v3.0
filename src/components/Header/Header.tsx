import './Header.css';

const headerLogoStart = "<";
const headerLogoEnd = "/>";

export default function Header ({ activeSection }: { activeSection: string }) {
    return (
    <header>
        <div id="name-home-link-container">
            <a id="name-home-link" href='#bio' className={`typewriter ${activeSection === 'bio' ? 'active' : ''}`}>
                <span className='headerLogo'>{headerLogoStart}</span> Kyle Olson <span className='headerLogo'>{headerLogoEnd}</span>
            </a>
        </div>
        <nav id="main-nav">
            <a className={`main-nav-link ${activeSection === 'experience' ? 'active' : ''}`} href="#experience">Experience</a>
            <a className={`main-nav-link ${activeSection === 'professional' ? 'active' : ''}`} href="#professional">Professional Work</a>
            <a className={`main-nav-link ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">Skills</a>
            <a className={`main-nav-link ${activeSection === 'personal' ? 'active' : ''}`} href="#personal">Personal Projects</a>
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