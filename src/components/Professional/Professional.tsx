import './Professional.css';

import Project from '../Project/Project';

import allStarFundsImg from '../../images/all-starfunds.png';
import pearldivercreditcompanyImg from '../../images/pearldivercreditcompany.png';
import clarkstoncapitalImg from '../../images/clarkstoncapital.png';
import x2etfsImg from '../../images/x2etfs.png';

const projectsObject: Record<'all-starfunds' | 'pearldivercreditcompany' | 'clarkstoncapital' | 'x2etfs', {
    title: string;
    description: string;
    image: string,
    projectUrl: string;
    projectTags?: string[];
}>  = {
    'all-starfunds': {
        title: 'Liberty All-Star Funds',
        description: 'A website for a mutual fund company, built using React and TypeScript.',
        image: allStarFundsImg,
        projectUrl: 'https://www.all-starfunds.com/',
        projectTags: ['PHP', 'JavaScript', 'JQuery', 'SCSS']
    },
    'pearldivercreditcompany': {
        title: 'Pearl Diver Credit Company',
        description: 'A website for a credit company, built using React and TypeScript.',
        image: pearldivercreditcompanyImg,
        projectUrl: 'https://www.pearldivercreditcompany.com/',
        projectTags: ['PHP', 'JavaScript', 'JQuery', 'SCSS']
    },
    'clarkstoncapital': {
        title: 'Clarkston Capital Partners',
        description: 'A website for a mutual fund company, built using React and TypeScript.',
        image: clarkstoncapitalImg,
        projectUrl: 'https://www.clarkstoncapital.com/',
        projectTags: ['PHP', 'JavaScript', 'JQuery', 'SCSS']
    },/* 
    'x2etfs': {
        title: 'X-Square Capital',
        description: 'A website for an ETF company, built using React and TypeScript.',
        image: x2etfsImg,
        projectUrl: 'https://www.x2etfs.com/',
        projectTags: ['PHP', 'JavaScript', 'JQuery', 'SCSS']
    } */
};

export default function Professional() {
    return (
        <div id="professional-container">
            <h2>Professional Work</h2>
            <p className='subtitle'>Here are some websites I built for real world clients while working at SS&C Technologies</p>

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