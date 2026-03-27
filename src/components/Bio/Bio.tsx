import './Bio.css';
import bioImage from '../../images/bio-image.jpeg';

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
                    <div className="bio-stat hover-animation">
                        <h2>5+ Years</h2>
                        <p className='bio-stat-text'>of Professional Work Experience</p>
                    </div>
                    <div className="bio-stat hover-animation">
                        <h2>6 Client Sites</h2>
                        <p className='bio-stat-text'>where I led Develpment</p>
                    </div>
                    <div className="bio-stat hover-animation">
                        <h2>~20 Sites</h2>
                        <p className='bio-stat-text'>Currently Maintained</p>
                    </div>
                    <div className="bio-stat hover-animation">
                        <h2>10,000+ Users</h2>
                        <p className='bio-stat-text'>Monthly on some sites</p>
                    </div>
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