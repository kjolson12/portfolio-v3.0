import { useState, useEffect } from 'react';

import './MobileNav.css';

const menuOptions = [
    { name: 'Experience', href: '#experience' },
    { name: 'Professional', href: '#professional' },
    { name: 'Skills', href: '#skills' },
    { name: 'Personal', href: '#personal' },
]

export default function MobileNav ({ activeSection }: { activeSection: string }) {
    const [navOpen, setNavOpen] = useState(false);
    const [activeNavLink, setActiveNavLink] = useState(activeSection);

    useEffect(() => {
        setActiveNavLink(activeSection);
    }, [activeSection]);

    return (
        <nav id="main-nav-mobile" onClick={() => setNavOpen(!navOpen)}>
            <button className={`button mobile-nav-button`}>
                {activeNavLink}
                <i className="bi bi-list"></i>
            </button>
            <div id="mobile-nav-menu" className={navOpen ? 'open' : ''}>
                { menuOptions.map(option => (
                    <button 
                        key={option.name} 
                        className={`button mobile-nav-button ${activeNavLink === option.href.substring(1) ? 'active' : ''}`} 
                        onClick={() => setNavOpen(false)}
                    >
                        {option.name}
                    </button>
                )) }
            </div>
        </nav>
    );
}