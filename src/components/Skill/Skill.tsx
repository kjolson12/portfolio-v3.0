import { useEffect, useRef, useState } from 'react';
import './Skill.css';

interface SkillProps {
    title: string;
    description: string;
    location: Array<number>;
};

export default function Skill({ title, description, location }: SkillProps) {
    const titleRef = useRef<HTMLHeadingElement>(null); // Ref for the skill-title element
    const [containerWidth, setContainerWidth] = useState(1); // State to store the calculated width
    const [calculatedHeight, setCalculatedHeight] = useState(1); // State to store the calculated height

    useEffect(() => {
        if (titleRef.current) {
            // Measure the width of the skill-title element
            const titleWidth = titleRef.current.offsetWidth;
            const titleHeight = titleRef.current.offsetHeight;

            // Calculate the grid column and row span based on the title width and height
            const calculatedWidth = Math.ceil(titleWidth / 8); // Assuming each grid column is 8px wide, adjust as needed
            const calculatedHeight = Math.ceil(titleHeight / 8); // Assuming each grid row is 8px tall, adjust as needed
            setContainerWidth(calculatedWidth);
            setCalculatedHeight(calculatedHeight);
        }
    }, [title]);

    const style = {
        gridColumnStart: location[0],
        gridColumnEnd: location[0] + containerWidth,

        gridRowStart: location[1],
        gridRowEnd: location[1] + calculatedHeight,
    };

    return (
        <div className="skill-container" style={style}>
            <h5 className="skill-title" ref={titleRef}>{title}</h5>
        </div>
    );
};