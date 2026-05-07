import { useEffect } from 'react';

export default function ActiveSectionObserver({ setActiveSection }: { setActiveSection: (section: string) => void }) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
                console.log(entry.target.id); // Debug log to verify the active section
            }
        });
    }, { threshold: 0.5 });

    const sectionIds = ['bio', 'experience', 'professional', 'skills', 'personal'];

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