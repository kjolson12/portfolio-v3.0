import './Bio.css';
import bioImage from '../../images/bio-image.jpeg';

import BioStat from '../BioStat/BioStat';

export default function Bio() {
    return (
        <div id="bio-container">
            <div id="bio-image-and-title">
                <img id="bio-image" className='hover-animation' src={bioImage} alt="" />
                <h1>Kyle Olson</h1>
                <h3>Website Developer</h3>
                <div id="bio-fun-facts" className='hover-animation'>
                    <p>Programming Language: JavaScript</p>
                    <p>Education: University of Oregon</p>
                    <p>Location: Charlotte, NC</p>
                    <p>Hometown: Brea, CA</p>
                </div>
            </div>
            <div id="bio-stats-and-quote-container">
                <div id="bio-stats-container">
                    <BioStat stat="5+ Years" text="of Professional Work Experience" />
                    <BioStat stat="6 Client Sites" text="where I led Development" />
                    <BioStat stat="~20 Sites" text="Currently Maintained" />
                    <BioStat stat="10,000+ Users" text="Monthly on Some Sites" />
                </div>
                <div id="bio-quote-container" className='hover-animation'>
                    <p className='bio-quote-text'>"Kyle consistently demonstrates a strong ability to complete tasks efficiently while maintaining a high level
                    of quality."</p>
                    <p style={{textAlign: 'right'}}>-Management</p>
                </div>
            </div>
        </div>
    );
};