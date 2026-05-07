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
        document.fonts.ready.then(() => {
            if (skillContainerRef.current) {
                let neededDescriptionWidth = 0;
                let neededDescriptionHeight = 0;

                let neededWidth = 0;
                let neededHeight = 0;

                if (descriptionContainerRef.current) {
                    neededDescriptionWidth = descriptionContainerRef.current.offsetWidth;
                    neededDescriptionHeight = descriptionContainerRef.current.offsetHeight;
                }

                if (skillContainerRef.current.offsetWidth > neededDescriptionWidth) {
                    neededWidth = skillContainerRef.current.offsetWidth;
                } else {
                    neededWidth = neededDescriptionWidth;
                }
                neededHeight = skillContainerRef.current.offsetHeight + neededDescriptionHeight;

                setContainerWidth(neededWidth);
                setContainerHeight(neededHeight);
            }
        });
    }, [title, expanded]);

    const style = {
        gridColumnStart: location[0],
        width: containerWidth,

        gridRowStart: location[1],
        height: containerHeight,
    };

    const renderTitle = () => {
        if (title === 'GitHub Copilot') {
            let tempTitle = [];

            for (let i = 0; i < title.length; i++) {
                const style = {
                    animationDelay: `${i * 0.1}s`,
                    color: `hsl(${(i * 360) / title.length}, 100%, 50%)`,
                };

                tempTitle.push(
                    <span
                        key={`${i}-${title[i]}`}
                        style={style}
                    >
                        {title[i]}
                    </span>
                );
            }

            return tempTitle;
        } else {
            return title;
        }
    }

    const renderID = () => {
        let tempID = title.toLowerCase().split(' ').join('-');

        return tempID;
    }

    return (
        <div id={`${renderID()}-skill`} className={`skill-container ${expanded ? 'active' : ''}`} style={style}>
            <div
                className="skill-title-and-img"
                ref={skillContainerRef}
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
            >
                <img className="skill-img" src={img} alt="" />
                <h5 className="skill-title">{renderTitle()}</h5>
            </div>
            <div className="skill-description" ref={descriptionContainerRef}>
                <p>{description}</p>
            </div>
        </div>
    );
};