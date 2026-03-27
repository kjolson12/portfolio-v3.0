import './Bio.css';
import bioImage from '../../images/bio-image.jpeg';

export default function Bio() {
    return (
        <div id="bio-container">
            <div id="bio-image-and-title">
                <img id="bio-image" src={bioImage} alt="" />
                <h1>Kyle Olson</h1>
                <h3>Website Developer</h3>
            </div>
            <div id="bio-stats-and-quote-container">
                <div id="bio-stats-container">
                    <div className="bio-stat" style={{backgroundColor: "#7d00ff"}}>
                        <h2>5+</h2>
                        <p className='bio-stat-text'>Years of Professional Work Experience</p>
                    </div>
                    <div className="bio-stat" style={{backgroundColor: "#04ff00"}}>
                        <h2>6</h2>
                        <p className='bio-stat-text'>Complete Website Builds Launched</p>
                    </div>
                    <div className="bio-stat" style={{backgroundColor: "#fffb00"}}>
                        <h2>~20</h2>
                        <p className='bio-stat-text'>Websites Managed by My Team and I</p>
                    </div>
                    <div className="bio-stat" style={{backgroundColor: "#FB00FF"}}>
                        <h2>10,000+</h2>
                        <p className='bio-stat-text'>Monthly Active Users on some sites</p>
                    </div>
                </div>
                <div id="bio-quote-container" style={{backgroundColor: "#0004FF"}}>
                    <p className='bio-quote-text'>"Kyle consistently demonstrates a strong ability to complete tasks efficiently while maintaining a high level
                    of quality."</p>
                    <p style={{textAlign: 'right'}}>-Management</p>
                </div>
            </div>
        </div>
    );
};