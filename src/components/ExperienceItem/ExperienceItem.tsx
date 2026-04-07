import { act, type Dispatch, type SetStateAction } from 'react';

import './ExperienceItem.css';

interface ExperienceProps {
    activeExperience: 'SSNC' | 'OHSU' | 'UO';
    setActiveExperience: Dispatch<SetStateAction<'SSNC' | 'OHSU' | 'UO'>>;
    title: string;
    subtitle: string;
    dateRange: string;
    duration: string;
    description?: string;
    image: string;
}

export default function ExperienceItem({ activeExperience, setActiveExperience, title, subtitle, dateRange, duration, description, image }: ExperienceProps) {
    const topArrowClick = () => {
        if (activeExperience === 'OHSU') {
            setActiveExperience('SSNC');
        } else if (activeExperience === 'UO') {
            setActiveExperience('OHSU');
        }
    };
    
    const topArrow = (
        <div className="top-arrow-placeholder">
            <div className="top-arrow"></div>
            <div className="arrow-down-animated" onClick={topArrowClick}></div>
        </div>
    );

    const bottomArrowClick = () => {
        if (activeExperience === 'OHSU') {
            setActiveExperience('UO');
        } else if (activeExperience === 'SSNC') {
            setActiveExperience('OHSU');
        }
    }

    const bottomArrow = (
        <div className="arrow-placeholder">
            <div className="arrow"></div>
            <div className="arrow-down-animated" onClick={bottomArrowClick}></div>
        </div>
    );

    return (
        <div className='experience-item'>
            {(activeExperience === 'OHSU' || activeExperience === 'UO') && topArrow}
            <img className="experience-img" src={image} alt="" />
            <div className="experience-text">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p className='experience-date-range'>{dateRange} | <span className='experience-duration'>{duration}</span></p>
                {description && <p>{description}</p>}
            </div>
            {(activeExperience === 'OHSU' || activeExperience === 'SSNC') && bottomArrow}
        </div>
    );
}