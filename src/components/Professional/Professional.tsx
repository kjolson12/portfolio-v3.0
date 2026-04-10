import './Professional.css';

import Project from '../Project/Project';

import allStarFundsImg from '../../images/all-starfunds.png';
import pearldivercreditcompanyImg from '../../images/pearldivercreditcompany.png';
import clarkstoncapitalImg from '../../images/clarkstoncapital.png';
//import x2etfsImg from '../../images/x2etfs.png';

const projectsObject: Record<'all-starfunds' | 'pearldivercreditcompany' | 'clarkstoncapital' /*| 'x2etfs'*/, {
    title: string;
    description: string;
    image: string,
    projectUrl: string;
    projectTags?: string[];
}>  = {
    'all-starfunds': {
        title: 'Liberty All-Star Funds',
        description: 'One of my first projects at SS&C which still remains one of my favorites. This was a complete redesign and rebuild of one of our already managed websites.',
        image: allStarFundsImg,
        projectUrl: 'https://www.all-starfunds.com/',
        projectTags: ['PHP', 'JavaScript', 'JQuery', 'Sass']
    },
    'pearldivercreditcompany': {
        title: 'Pearl Diver Credit Company',
        description: 'One of my more recent projects at SS&C, this was a new fund launch for a new client. This website features a modern design with a deep sea aethetic to match the company name.',
        image: pearldivercreditcompanyImg,
        projectUrl: 'https://www.pearldivercreditcompany.com/',
        projectTags: ['PHP', 'JavaScript', 'JQuery', 'Sass']
    },
    'clarkstoncapital': {
        title: 'Clarkston Capital Partners',
        description: 'This website is the sister site to clarkstonfunds.com, which was built by a colleague of mine. We worked closely together to ensure the two sites had brand continuity while still being unique.',
        image: clarkstoncapitalImg,
        projectUrl: 'https://www.clarkstoncapital.com/',
        projectTags: ['PHP', 'JavaScript', 'JQuery', 'Sass']
    },/* 
    'x2etfs': {
        title: 'X-Square Capital',
        description: 'A website for an ETF company, built using React and TypeScript.',
        image: x2etfsImg,
        projectUrl: 'https://www.x2etfs.com/',
        projectTags: ['PHP', 'JavaScript', 'JQuery', 'Sass']
    } */
};

export default function Professional() {
    return (
        <div id="professional-container">
            <h2>Professional Work</h2>
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
};