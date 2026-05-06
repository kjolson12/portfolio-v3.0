import { useEffect, useRef, useState } from 'react';
import './Skill.css';

interface SkillProps {
    title: string;
    description: string;
    location: Array<number>;
    img: string;
};

export default function Skill({ title, description, location, img }: SkillProps) {
    const skillContainerRef = useRef<HTMLHeadingElement>(null); // Ref for the skill-title element
    const descriptionContainerRef = useRef<HTMLDivElement>(null); // Ref for the skill-description element

    const [containerWidth, setContainerWidth] = useState(1); // State to store the calculated width
    const [containerHeight, setContainerHeight] = useState(1); // State to store the calculated height

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (skillContainerRef.current) {
            let neededDescriptionWidth = 0;
            let neededDescriptionHeight = 0;

            if(descriptionContainerRef.current) {
                neededDescriptionWidth = descriptionContainerRef.current.offsetWidth;
                neededDescriptionHeight = descriptionContainerRef.current.offsetHeight;
            }

            // Measure the width of the skill-title element
            const neededWidth = skillContainerRef.current.offsetWidth + neededDescriptionWidth; // Add description width if it exists
            const neededHeight = skillContainerRef.current.offsetHeight + neededDescriptionHeight; // Add description height if it exists

            // Calculate the grid column and row span based on the title width and height
            const calculatedWidth = Math.ceil(neededWidth / 8); // Assuming each grid column is 8px wide, adjust as needed
            const calculatedHeight = Math.ceil(neededHeight / 8); // Assuming each grid row is 8px tall, adjust as needed
            setContainerWidth(calculatedWidth);
            setContainerHeight(calculatedHeight);
        }
    }, [title, expanded]);

    const style = {
        gridColumnStart: location[0],
        gridColumnEnd: location[0] + containerWidth,

        gridRowStart: location[1],
        gridRowEnd: location[1] + containerHeight,
    };

    const descriptionMarkup = (
        <div className="skill-description" ref={descriptionContainerRef}>
            <p>{description}</p>
        </div>
    );

    return (
        <div
            className="skill-container"
            style={style}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            <div className="skill-title-and-img" ref={skillContainerRef}>
                <img className="skill-img" src={img} alt="" />
                <h5 className="skill-title">{title}</h5>
            </div>
            {expanded && descriptionMarkup}
        </div>
    );
};