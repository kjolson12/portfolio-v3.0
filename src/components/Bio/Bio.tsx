import './Bio.css';
import bioImage from '../../images/bio-image.jpeg';

import BioStat from '../BioStat/BioStat';

export default function Bio() {
    return (
        <div id="bio-container">
            <div id="bio-image-and-title">
                <img id="bio-image" className='hover-animation' src={bioImage} alt="" />
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
                <h4>Key Stats</h4>
                <div id="bio-stats-container">
                    <BioStat stat="5+ Years" text="of professional work experience" />
                    <BioStat stat="6 Client Sites" text="where I led development" />
                    <BioStat stat="~20 Sites" text="currently maintained" />
                    <BioStat stat="10,000+ Users" text="monthly on some sites" />
                </div>
                <h4>What Others Say</h4>
                <div id="bio-quote-container" className='hover-animation'>
                    <p className='bio-quote-text'>"Kyle consistently demonstrates a strong ability to complete tasks efficiently while maintaining a high level
                    of quality."</p>
                    <p style={{textAlign: 'right'}}>- Management</p>
                </div>
            </div>
        </div>
    );
};