import { useState } from 'react';

import './Experience.css';

import programmingImg from '../../images/programming.jpg';
import laboratoryImg from '../../images/laboratory.jpg';
import duckMascotImg from '../../images/duck-mascot.webp';

import Timeline from '../Timeline/Timeline';
import ExperienceItem from '../ExperienceItem/ExperienceItem';

function calculateTimeSinceJune2021(): string {
    const startDate = new Date(2021, 5); // June 2021 (month is 0-indexed)
    const currentDate = new Date();

    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();

    const totalMonths = years * 12 + months;
    const displayYears = Math.floor(totalMonths / 12);
    const displayMonths = totalMonths % 12;

    return `${displayYears} Years ${displayMonths} Months`;
}

const experienceObjects: Record<'SSNC' | 'OHSU' | 'UO', {
    title: string;
    subtitle: string;
    dateRange: string;
    description?: string;
    image: string;
}> = {
    'SSNC': {
        title: 'Front End Web Developer',
        subtitle: 'SS&C Technologies',
        dateRange: 'Jun 2021 - Present | ' + calculateTimeSinceJune2021(),
        description: 'Led several complete website development projects as the primary front end engineer for the Creative Services department.',
        image: programmingImg
    },
    'OHSU': {
        title: 'Laboratory Technician',
        subtitle: 'Oregon Health & Science University',
        dateRange: 'Dec 2018 - Jan 2021 | 2 Years 2 Months',
        description: 'Laboratory Animal Technician at the Oregon National Primate Research Center, responsible for providing husbandry, healthcare, and research support for non-human primates.',
        image: laboratoryImg
    },
    'UO': {
        title: 'University of Oregon',
        subtitle: 'Bachelor of Science in Biology',
        dateRange: 'Sep 2013 - Jun 2018 | 4 Years 9 Months',
        description: 'Graduated with a Bachelor of Science in Biology, with a focus on XXXX and XXXX biology. Completed coursework in conservation biology, neurobiology, and organic chemistry.',
        image: duckMascotImg
    }
};

export default function Experience() {
    const [activeExperience, setActiveExperience] = useState<'SSNC' | 'OHSU' | 'UO'>('SSNC');

    const experienceItemContainerStyle = () => {
        switch (activeExperience) {
            case 'SSNC':
                return {'paddingTop': '0rem'};
            case 'OHSU':
                return {'paddingTop': '10rem'};
            case 'UO':
                return {'paddingTop': '13rem'};
            default:
                return {};
        }
    }

    return (
        <div id="experience-container">
            <Timeline activeExperience={activeExperience} setActiveExperience={setActiveExperience} />
            <div id="experience-item-container" style={experienceItemContainerStyle()}>
                <ExperienceItem
                    activeExperience={activeExperience}
                    setActiveExperience={setActiveExperience}
                    title={experienceObjects[activeExperience].title}
                    subtitle={experienceObjects[activeExperience].subtitle}
                    dateRange={experienceObjects[activeExperience].dateRange}
                    description={experienceObjects[activeExperience].description}
                    image={experienceObjects[activeExperience].image}
                />
            </div>
        </div>
    );
}