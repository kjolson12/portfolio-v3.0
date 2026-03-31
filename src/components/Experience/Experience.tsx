import './Experience.css';

import Timeline from '../Timeline/Timeline';

export default function Experience() {

    const SSNCcontent = (
        <div className='experience-content'>
            <h3>Front End Web Developer</h3>
            <h4>SS&C Technologies</h4>
            <p>Jun 2021 - Present | 5 Years</p>
            <p>Led several complete website development projects as the primary front end engineer for the Creative Services department.</p>
        </div>
    );

    const OHSUcontent = (
        <div className='experience-content'>
            <h3>Laboratory Technician</h3>
            <h4>Oregon Health & Science University</h4>
            <p>Dec 2018 - Jan 2021 | 2 Years 2 months</p>
            <p>Laboratory Animal Technician at the Oregon National Primate Research Center, responsible for providing husbandry, healthcare, and research support for non-human primates.</p>
        </div>
    );

    const UOcontent = (
        <div className='experience-content'>
            <h3>University of Oregon</h3>
            <h4>Bachelor of Science in Biology</h4>
        </div>
    );

    return (
        <div id="experience-container">
                <Timeline />
                <div id="experience-content-container">
                    {SSNCcontent}
                </div>
        </div>
    );
}