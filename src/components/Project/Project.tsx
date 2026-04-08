import './Project.css';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    projectUrl: string;
}

export default function Project({ title, description, image, projectUrl }: ProjectProps) {
    return (
        <div className='project-container'>
            <img src={image} alt={`screenshot of ${title} website`} onClick={() => window.open(projectUrl, '_blank')} />
            <h4>{title}</h4>
            <p>{description}</p>
            <button className="button button-secondary" onClick={() => window.open(projectUrl, '_blank')}>View Website</button>
        </div>
    );
};