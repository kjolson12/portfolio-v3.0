import Chip from '../Chip/Chip';

import './About.css';

const onlineSkillsObject = {
    'javascript': {
        title: 'JavaScript',
        description: 'I have experience with JavaScript, and I am proficient in using it for both frontend and backend development.'
    },
    'html': {
        title: 'HTML',
        description: 'I have experience with HTML, and I am proficient in using it to create structured and semantic web pages.'
    },
    'css': {
        title: 'CSS',
        description: 'I have experience with CSS, and I am proficient in using it to create visually appealing and responsive web designs.'
    },
    'react': {
        title: 'React',
        description: 'I have experience with React, and I am proficient in using it to build dynamic and interactive user interfaces.'
    },
    'github': {
        title: 'GitHub',
        description: 'I have experience with GitHub, and I am proficient in using it for version control and collaboration on software projects.'
    },
}

const offlineSkillsObject = {
    'cooking': {
        title: 'Cooking',
        description: 'I have experience with cooking, and I enjoy experimenting with different recipes and cuisines to create delicious meals.'
    },
    'espresso': {
        title: 'Espresso',
        description: 'I have experience with making espresso, and I am proficient in using an espresso machine to create rich and flavorful coffee beverages.'
    },
    'guitar': {
        title: 'Guitar',
        description: 'I have experience with playing the guitar, and I enjoy learning new songs and techniques to improve my skills.'
    },
    'weightlifting': {
        title: 'Weightlifting',
        description: 'I have experience with weightlifting, and I am proficient in using various exercises and techniques to build strength and muscle.'
    },
    'videogames': {
        title: 'Videogames',
        description: 'I have experience with playing videogames, and I enjoy exploring different genres and platforms to find new and exciting gaming experiences.'
    },
}

export default function About () {
    return (
        <div id="about-container">
            <div className="typewriter-container">
                <h2 className="typewriter">About</h2>
            </div>
            <div id="chips-container">
                <Chip title={'online'} skillsObject={onlineSkillsObject} />
                <Chip title={'offline'} skillsObject={offlineSkillsObject} />
            </div>
        </div>
    );
};