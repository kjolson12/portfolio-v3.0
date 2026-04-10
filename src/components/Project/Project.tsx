import './Project.css';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    projectUrl: string;
    projectTags?: string[];
}

export default function Project({ title, description, image, projectUrl, projectTags }: ProjectProps) {
    const id = title.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className='project-container'>
            <img id={`${id}-img`} src={image} alt={`screenshot of ${title} website`} onClick={() => window.open(projectUrl, '_blank')} />
            <div className="project-tags">
                {projectTags?.map((tag, index) => (
                    <span key={index} className={`project-tag ${tag.toLowerCase()}-tag`}>{tag}</span>
                ))}
            </div>
            <div className="project-text">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className="project-button-container">
                <button className="button" onClick={() => window.open(projectUrl, '_blank')}>View Website</button>
            </div>
        </div>
    );
};