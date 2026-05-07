import { useEffect } from 'react';

export default function ActiveSectionObserver({ setActiveSection }: { setActiveSection: (section: string) => void }) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, { threshold: 0.5 });

    const sectionIds = ['experience', 'professional', 'skills', 'personal'];

    useEffect(() => {
        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });
    }, []);

    return null; // This component doesn't render anything
}