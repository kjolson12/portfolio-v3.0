import './Skill.css';

interface SkillProps {
    title: string;
    description: string;
    location: Array<number>;
};

export default function Skill ({ title, description, location }: SkillProps) {
    const style = {
        gridColumnStart: location[0],
        gridColumnEnd: location[0] + ( title.length * 3),

        gridRowStart: location[1],
        gridRowEnd: location[1] + 5,
    }
    return (
        <div className="skill-container" style={style}>
            <h5 className="skill-title">{title}</h5>
        </div>
    );
};