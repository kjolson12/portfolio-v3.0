import './ExperienceItem.css'

export default function ExperienceItem({ title, subtitle, dateRange, description, image }: { title: string, subtitle: string, dateRange: string, description?: string, image: string }) {
    return (
        <div className='experience-item'>
            <img className="experience-img" src={image} alt="" />
            <div className="experience-text">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p className='experience-date-range'>{dateRange}</p>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}