import { useState, useEffect } from 'react';

import './Header.css';

import MobileNav from '../MobileNav/MobileNav';
import ResumeButton from '../ResumeButton/ResumeButton';

const headerLogoStart = "<";
const headerLogoEnd = "/>";

export default function Header ({ activeSection }: { activeSection: string }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const desktopNav = (
        <nav id="main-nav">
            <a className={`main-nav-link ${activeSection === 'experience' ? 'active' : ''}`} href="#experience">Experience</a>
            <a className={`main-nav-link ${activeSection === 'professional' ? 'active' : ''}`} href="#professional">Professional Work</a>
            <a className={`main-nav-link ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">Skills</a>
            <a className={`main-nav-link ${activeSection === 'personal' ? 'active' : ''}`} href="#personal">Personal Projects</a>
        </nav>
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            <div id="name-home-link-container">
                <a id="name-home-link" href='#bio' className="typewriter">
                    <span className='headerLogo'>{headerLogoStart}</span> Kyle Olson <span className='headerLogo'>{headerLogoEnd}</span>
                </a>
            </div>

            { windowWidth > 1024 ? desktopNav : <MobileNav activeSection={activeSection} /> }

            <ResumeButton />
        </header>
    );
};