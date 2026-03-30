import './Bio.css';
import bioImage from '../../images/bio-image.jpeg';

import BioStat from '../BioStat/BioStat';

export default function Bio() {
    return (
        <div id="bio-container">
            <div id="bio-image-and-title">
                <img id="bio-image" className='hover-animation' src={bioImage} alt="" />
                <h1>Kyle Olson</h1>
                <h4>Website Developer</h4>
                <div id="bio-fun-facts">
                    <p><span className="fun-fact-category">programming language:</span> JavaScript</p>
                    <p><span className="fun-fact-category">education:</span> University of Oregon</p>
                    <p><span className="fun-fact-category">current location:</span> Charlotte, NC</p>
                    <p><span className="fun-fact-category">hometown:</span> Brea, CA</p>
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