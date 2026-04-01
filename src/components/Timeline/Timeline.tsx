import { type Dispatch, type SetStateAction } from 'react';

import './Timeline.css';

interface TimelineProps {

    setActiveExperience: Dispatch<SetStateAction<string>>;

}

export default function Timeline({ setActiveExperience }: TimelineProps) {
    return (
        <div id="timeline-container">
            <div className='timeline-item-container' onMouseEnter={() => setActiveExperience('SSNC')}>
                <div className="timeline-item">
                    <p>Jun 2021 - Present</p>
                    <div className='timeline-bubble' id="ssnc-bubble"></div>
                </div>
                <div className="timeline-line" id="ssnc-line"></div>
            </div>
            <div className='timeline-item-container' onMouseEnter={() => setActiveExperience('OHSU')}>
                <div className="timeline-item">
                    <p>Dec 2018 - Jan 2021</p>
                    <div className='timeline-bubble' id="ohsu-bubble"></div>
                </div>
                <div className="timeline-line" id="ohsu-line"></div>
            </div>
            <div className='timeline-item-container' onMouseEnter={() => setActiveExperience('UO')}>
                <div className="timeline-item">
                    <p>Sep 2013 - Jun 2018</p>
                    <div className='timeline-bubble' id="uo-bubble"></div>
                </div>
                <div className="timeline-line" id="uo-line"></div>
            </div>
        </div>
    );
};