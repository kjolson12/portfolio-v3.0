import { useOnInView } from "react-intersection-observer";

import BioStat from '../BioStat/BioStat';
import Quotes from '../Quotes/Quotes';

import './Bio.css';

interface BioProps {
    configTypewriterEffect: (element: HTMLElement) => void;
}

export default function Bio({ configTypewriterEffect }: BioProps) {
    const typewriterRef = useOnInView((inView, entry) => {
        if (inView) {
            configTypewriterEffect(entry.target as HTMLElement);
        }
    });

    return (
        <div id="bio-container">
            <div id="bio-image-and-title">
                <div id="bio-image" className='hover-animation'></div>
                <div id="bio-title">
                    <h1>Kyle Olson</h1>
                    <h4>Website Developer</h4>
                </div>
                <div id="bio-fun-facts">
                    <div className="fun-fact">
                        <p className="fun-fact-category">programming</p>
                        <p className='fun-fact-value'>JavaScript</p>
                    </div>
                    <div className="fun-fact">
                        <p className="fun-fact-category">education</p>
                        <p className='fun-fact-value'>University of Oregon</p>
                    </div>
                    <div className="fun-fact">
                        <p className="fun-fact-category">current location</p>
                        <p className='fun-fact-value'>Charlotte, NC</p>
                    </div>
                    <div className="fun-fact">
                        <p className="fun-fact-category">hometown</p>
                        <p className='fun-fact-value'>Brea, CA</p>
                    </div>
                </div>
            </div>
            <div id="bio-stats-and-quote-container">
                <div className="typewriter-container">
                    <h4 ref={typewriterRef} className='typewriter'>Key Stats</h4>
                </div>
                <div id="bio-stats-container">
                    <BioStat stat="5 years" text="of professional work experience" />
                    <BioStat stat="6 client sites" text="where I led development" />
                    <BioStat stat="20 sites" text="currently maintained" />
                    <BioStat stat="10,000+ users" text="monthly on some sites" />
                </div>
                <div className="typewriter-container">
                    <h4 ref={typewriterRef} className='typewriter'>What Others Say</h4>
                </div>
                <Quotes />
            </div>
        </div>
    );
};