import Chip from '../Chip/Chip';

import './About.css';

const onlineSkillsObject = {
    'javascript': {
        location: [20, 10],
        title: 'JavaScript',
        description: 'I have experience with JavaScript, and I am proficient in using it for both frontend and backend development.',
        circuitMap: [
            {
                coordinate: [34, 23],
                rotation: 0
            },
            {
                coordinate: [34, 22],
                rotation: 0
            },{
                coordinate: [34, 21],
                rotation: 0
            },
            {
                coordinate: [34, 20],
                rotation: 0
            },
            {
                coordinate: [34, 19],
                rotation: 0
            },{
                coordinate: [34, 18],
                rotation: 0
            },
            {
                coordinate: [34, 17],
                rotation: 0
            },
            {
                coordinate: [34, 16],
                rotation: 0
            },{
                coordinate: [34, 15],
                rotation: 0
            }
        ]
    },
    'html': {
        location: [50, 10],
        title: 'HTML',
        description: 'I have experience with HTML, and I am proficient in using it to create structured and semantic web pages.'
    },
    'github': {
        location: [20, 45],
        title: 'GitHub Copilot',
        description: 'I have experience with GitHub, and I am proficient in using it for version control and collaboration on software projects.'
    },
    'react': {
        location: [45, 48],
        title: 'React',
        description: 'I have experience with React, and I am proficient in using it to build dynamic and interactive user interfaces.'
    },
    'css': {
        location: [12, 30],
        title: 'CSS',
        description: 'I have experience with CSS, and I am proficient in using it to create visually appealing and responsive web designs.'
    }
}

const offlineSkillsObject = {
    'weightlifting': {
        location: [12, 10],
        title: 'Weightlifting',
        description: 'I have experience with weightlifting, and I am proficient in using various exercises and techniques to build strength and muscle.'
    },
    'espresso': {
        location: [45, 10],
        title: 'Espresso',
        description: 'I have experience with making espresso, and I am proficient in using an espresso machine to create rich and flavorful coffee beverages.'
    },
    'videogames': {
        location: [15, 48],
        title: 'Videogames',
        description: 'I have experience with playing videogames, and I enjoy exploring different genres and platforms to find new and exciting gaming experiences.'
    },
    'cooking': {
        location: [45, 48],
        title: 'Cooking',
        description: 'I have experience with cooking, and I enjoy experimenting with different recipes and cuisines to create delicious meals.'
    },
    'guitar': {
        location: [55, 30],
        title: 'Guitar',
        description: 'I have experience with playing the guitar, and I enjoy learning new songs and techniques to improve my skills.'
    }
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