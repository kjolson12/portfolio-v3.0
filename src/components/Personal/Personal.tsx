import './Personal.css';

import Project from '../Project/Project';

import smiteUIImg from '../../images/smite-2-ui.png';

const projectsObject: Record<'smiteUI', {
    title: string;
    description: string;
    image: string,
    projectUrl: string;
    projectTags?: string[];
}>  = {
    'smiteUI': {
        title: 'Smmite 2 UI Concept',
        description: 'Video games are full of user interfaces where intuitivity is critical. Smite is one of my favorite games, but the character selection screen always felt lacking. I used this as an opportunity to practice my React and UI design skills by building a concept character selection screen for Smite 2, the upcoming sequel to Smite.',
        image: smiteUIImg,
        projectUrl: 'https://www.smite2ui.com/',
        projectTags: ['React', 'JavaScript', 'CSS']
    },
};

export default function Personal() {
    return (
        <div id="personal-container">
            <h2>Personal Projects</h2>
            <p className="subtitle">Here are some projects I've built for fun in my free time</p>
            <div className='projects-container'>
                {Object.entries(projectsObject).map(([key, project]) => (
                    <Project
                        key={key}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        projectUrl={project.projectUrl}
                        projectTags={project.projectTags}
                    />
                ))}
            </div>
        </div>
    );
}