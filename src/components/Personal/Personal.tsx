import './Personal.css';

import Project from '../Project/Project';

import smiteUIImg from '../../images/smite-2-ui.png';

const projectsObject: Record<'smiteUI', {
    title: string;
    description: string;
    image: string,
    projectUrl: string;
    projectGitHubUrl?: string;
    projectTags?: string[];
}>  = {
    'smiteUI': {
        title: 'SMITE 2 UI Concept',
        description: 'Video games are full of user interfaces where intuitivity is critical. I took an opportunity to practice my React and UI design skills by improving the character select screen for one of my favorite games.',
        image: smiteUIImg,
        projectUrl: 'https://www.smite2ui.com/',
        projectGitHubUrl: 'https://github.com/kjolson12',
        projectTags: ['React', 'JavaScript', 'CSS']
    },
};

export default function Personal() {
    return (
        <div id="personal-container">
            <div className="typewriter-container">
                <h2 className='typewriter'>Personal Projects</h2>
            </div>
            <div className='projects-container'>
                {Object.entries(projectsObject).map(([key, project]) => (
                    <Project
                        key={key}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        projectUrl={project.projectUrl}
                        projectGitHubUrl={project.projectGitHubUrl}
                        projectTags={project.projectTags}
                    />
                ))}
            </div>
        </div>
    );
}