import Chip from '../Chip/Chip';

import './About.css';

export default function About () {
    return (
        <div id="about-container">
            <div className="typewriter-container">
                <h2 className="typewriter">About</h2>
            </div>
            <div id="chips-container">
                <Chip title={'online'} />
                <Chip title={'offline'} />
            </div>
        </div>
    );
};