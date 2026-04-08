import { useState, useEffect } from 'react';

import './Quotes.css';

const quotesArray = [
    "Kyle consistently demonstrates a strong ability to complete tasks efficiently while maintaining a high level of quality.",
    "[Kyle] delivered excellent results across multiple projects, including the programming of the clarkstoncapital.com and diameterdynamiccredit.com websites.",
    "Kyle led the redesign of the x2etfs.com, which was very well received by the client.",
    "Kyle reliably meets deadlines and manages competing priorities with ease. He is a trusted resource for early day requests that arise before the project manager is available.",
    "His strong problem-solving skills, reliability, and willingness to step in when needed make him a highly dependable and valuable member of the team."
];

export default function Quotes() {
    const [quoteCount, setQuoteCount] = useState(0);

    const handleQuoteClick = (index: number) => {
        setQuoteCount(index);
    }

    const startLoadingBar = () => {
        const loadingBar = document.querySelector('.loading-bar') as HTMLElement;
        if (loadingBar) {
            loadingBar.classList.remove('active');
            void loadingBar.offsetWidth; // Trigger a reflow to restart the animation
            loadingBar.classList.add('active');
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteCount((prevCount) => (prevCount + 1) % quotesArray.length);
            startLoadingBar();
        }, 7000);
        startLoadingBar(); // Start the loading bar immediately on component mount

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [handleQuoteClick]);

    return (
        <div id="quotes-container" className='hover-animation'>
            <div id="quote-text-container">
                <p className='quote-text'>"{quotesArray[quoteCount]}"</p>
                <p className='quote-author'>- Management</p>
            </div>
            <div className='loading-bar-container'>
                <div className="loading-bar" />
            </div>
            <div id="quote-selectors">
                {quotesArray.map((_, index) => (
                    <span
                        key={index}
                        className={`quote-selector ${index === quoteCount ? 'active' : ''}`}
                        onClick={() => handleQuoteClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};