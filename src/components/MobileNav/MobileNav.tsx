import { useState, useEffect } from 'react';

import './MobileNav.css';

const menuOptions = [
    { name: 'Experience', href: '#experience' },
    { name: 'Professional Work', href: '#professional' },
    { name: 'Skills', href: '#skills' },
    { name: 'Personal Projects', href: '#personal' },
]

export default function MobileNav ({ activeSection }: { activeSection: string }) {
    const [navOpen, setNavOpen] = useState(false);
    const [activeNavLink, setActiveNavLink] = useState(activeSection);

    useEffect(() => {
        setActiveNavLink(activeSection);
    }, [activeSection]);

    return (
        <nav id="main-nav-mobile" onClick={() => setNavOpen(true)}>
            <button className={`button mobile-nav-button`}>
                {activeNavLink}
                <i className="bi bi-list"></i>
            </button>     
        </nav>
    );
}