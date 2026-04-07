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

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteCount((prevCount) => (prevCount + 1) % quotesArray.length);
        }, 7000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div id="quotes-container" className='hover-animation'>
            <p className='quote-text'>"{quotesArray[quoteCount]}"</p>
            <p className='quote-author'>- Management</p>
        </div>
    );
};