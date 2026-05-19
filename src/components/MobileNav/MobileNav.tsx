import { useState, useEffect } from 'react';

import './MobileNav.css';

const menuOptions = [
    { name: 'Bio', href: '#bio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Professional', href: '#professional' },
    { name: 'Skills', href: '#skills' },
    { name: 'Personal', href: '#personal' },
]

export default function MobileNav ({ activeSection }: { activeSection: string }) {
    const [navOpen, setNavOpen] = useState(false);
    const [activeNavLink, setActiveNavLink] = useState(activeSection);

    const cleanedMenuOptions = menuOptions.filter(option => option.href.substring(1) !== activeNavLink);

    useEffect(() => {
        setActiveNavLink(activeSection);
    }, [activeSection]);

    return (
        <nav id="main-nav-mobile" onClick={() => setNavOpen(!navOpen)}>
            <a className={`button mobile-nav-button`}>
                {activeNavLink}
                <i className="bi bi-list"></i>
            </a>
            <div id="mobile-nav-menu" className={navOpen ? 'open' : ''}>
                { cleanedMenuOptions.map(option => (
                    <a 
                        key={option.name} 
                        className={`button mobile-nav-button ${activeNavLink === option.href.substring(1) ? 'active' : ''}`} 
                        href={option.href}
                        onClick={() => setNavOpen(false)}
                    >
                        {option.name}
                    </a>
                )) }
            </div>
        </nav>
    );
}