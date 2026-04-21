import React from 'react';
import Skill from '../Skill/Skill';
import Circuit from '../Circuit/Circuit';

import './Chip.css';

interface ChipProps {
    title?: string;
    skillsObject?: {
        [key: string]: {
            title: string,
            description: string,
            location: Array<number>,
            circuitMap?: Array<{
                coordinate: Array<number>,
                rotation: number
            }>
        }
    };
};

export default function Chip ({ title, skillsObject }: ChipProps) {
    const numofNodes = 16;
    const nodeArray = [];

    const generateNodeStyle = (index: number) => {
        if (index < 4) {
            return { gridRowStart: `23`, gridColumnStart: `${34 + (index * 3)}` };
        } else if (index < 8) {
            return { gridColumnStart: `46`, gridRowStart: `${26 + ((index - 4) * 3)}` };
        } else if (index < 12) {
            return { gridRowStart: `38`, gridColumnStart: `${34 + ((index - 8) * 3)}` };
        } else if (index < 16) {
            return { gridColumnStart: `31`, gridRowStart: `${26 + ((index - 12) * 3)}` };
        }
    }
    
    for (let i = 0; i < numofNodes; i++) {
        nodeArray.push(<div className={`chip-node chip-node-${i}`} key={`${title}chip-node-${i}`} style={generateNodeStyle(i)}></div>);
    }

    const generateCircuit = (skillObject: { title: string; description?: string; location?: Array<number>; circuitMap?: Array<{ coordinate: Array<number>, rotation: number }>; }) => {
        if (!skillObject.circuitMap) return null;

        return skillObject.circuitMap.map((circuit, index) => {
            return <Circuit key={`$${skillObject.title}-circuit-${index}`} coordinate={circuit.coordinate} rotation={circuit.rotation} />
        });
    }

    return (
        <div className="chip-container">
            {nodeArray}
            <div id={`${title}-chip`} className="chip">
                <span className="chip-title">{title}</span>
            </div>
            {skillsObject && Object.keys(skillsObject).map((skillKey, index) => {
                const skill = skillsObject[skillKey];
                return (
                    <React.Fragment key={`${title}-skill-${index}`}>
                        {generateCircuit(skill)}
                        <Skill title={skill.title} description={skill.description} location={skill.location} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};