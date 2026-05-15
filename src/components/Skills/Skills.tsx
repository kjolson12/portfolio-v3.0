import Chip from '../Chip/Chip';

import './Skills.css';
import javascriptLogo from '../../images/javascript.png';
import htmlLogo from '../../images/html.png';
import cssLogo from '../../images/css.png';
import reactLogo from '../../images/react.png';
import githubCopilotLogo from '../../images/github.png';

import guitarLogo from '../../images/guitar.png';
import espressoLogo from '../../images/espresso.png';
import videogamesLogo from '../../images/controller.png';
import cookingLogo from '../../images/cooking.png';
import weightliftingLogo from '../../images/dumbell.png';

const onlineSkillsObject = {
    'javascript': {
        location: {
            'desktop': [11, 1],
            'laptop': [11, 1],
        },
        title: 'JavaScript',
        description: 'I have experience with JavaScript, and I am proficient in using it for both frontend and backend development.',
        img: javascriptLogo
    },
    'html': {
        location: {
            'desktop': [43, 6],
            'laptop': [43, 6],
        },
        title: 'HTML',
        description: 'I have experience with HTML, and I am proficient in using it to create structured and semantic web pages.',
        img: htmlLogo
    },
    'github': {
        location: {
            'desktop': [13, 39],
            'laptop': [13, 39],
        },
        title: 'GitHub Copilot',
        description: 'I have experience with GitHub, and I am proficient in using it for version control and collaboration on software projects.',
        img: githubCopilotLogo
    },
    'react': {
        location: {
            'desktop': [44, 26],
            'laptop': [44, 26],
        },
        title: 'React',
        description: 'I have experience with React, and I am proficient in using it to build dynamic and interactive user interfaces.',
        img: reactLogo
    },
    'css': {
        location: {
            'desktop': [1, 21],
            'laptop': [1, 21],
        },
        title: 'CSS',
        description: 'I have experience with CSS, and I am proficient in using it to create visually appealing and responsive web designs.',
        img: cssLogo
    }
}

const offlineSkillsObject = {
    'weightlifting': {
        location: {
            'desktop': [3, 1],
            'laptop': [3, 1],
        },
        title: 'Weightlifting',
        description: 'I have experience with weightlifting, and I am proficient in using various exercises and techniques to build strength and muscle.',
        img: weightliftingLogo
    },
    'espresso': {
        location: {
            'desktop': [40, 5],
            'laptop': [38, 5],
        },
        title: 'Espresso',
        description: 'I have experience with making espresso, and I am proficient in using an espresso machine to create rich and flavorful coffee beverages.',
        img: espressoLogo
    },
    'videogames': {
        location: {
            'desktop': [13, 39],
            'laptop': [13, 39],
        },
        title: 'Video Games',
        description: 'I have experience with playing videogames, and I enjoy exploring different genres and platforms to find new and exciting gaming experiences.',
        img: videogamesLogo
    },
    'cooking': {
        location: {
            'desktop': [43, 26],
            'laptop': [40, 26],
        },
        title: 'Cooking',
        description: 'I have experience with cooking, and I enjoy experimenting with different recipes and cuisines to create delicious meals.',
        img: cookingLogo
    },
    'guitar': {
        location: {
            'desktop': [1, 21],
            'laptop': [1, 21],
        },
        title: 'Guitar',
        description: 'I have experience with playing the guitar, and I enjoy learning new songs and techniques to improve my skills.',
        img: guitarLogo
    }
}

export default function Skills ({ activeSection }: { activeSection: string }) {
    return (
        <div id="skills-container">
            <div className="typewriter-container">
                <h2 className="typewriter">Skills</h2>
            </div>
            <div id="chips-container">
                <div className="chip-board">
                    <Chip title={'online'} skillsObject={onlineSkillsObject} activeSection={activeSection} />
                </div>
                <div className="chip-board">
                    <Chip title={'offline'} skillsObject={offlineSkillsObject} activeSection={activeSection} />
                </div>
            </div>
        </div>
    );
};