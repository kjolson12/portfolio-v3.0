import './Timeline.css';

export default function Timeline() {
    return (
        <div id="timeline-container">
            <div className="timeline-item">
                <p>Jun 2021 - Present</p>
                <div className='timeline-bubble' id="ssnc-bubble"></div>
            </div>
            <div className="timeline-item">
                <p>Dec 2018 - Jan 2021</p>
                <div className='timeline-bubble' id="ohsu-bubble"></div>
            </div>
            <div className="timeline-item">
                <p>Sep 2013 - Jun 2018</p>
                <div className='timeline-bubble' id="uo-bubble"></div>
            </div>
        </div>
    );
};