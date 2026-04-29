import React from 'react';
import Skill from '../Skill/Skill';
import Circuit from '../Circuit/Circuit';

import './Chip.css';
import { skillCircuitMap } from '../../assets/circuit-map.ts';

declare module '../../assets/circuit-map.ts' {
    interface CircuitMap {
        [key: string]: Array<{
            coordinate: Array<number>;
            rotation: number;
            version: string;
        }>;
    }
}

interface ChipProps {
    title?: string;
    skillsObject?: {
        [key: string]: {
            title: string,
            description: string,
            location: Array<number>,
            img: string,
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

    const generateCircuit = (skillCircuitArray: { [key: string]: Array<{ coordinate: Array<number>, rotation: number , version: string}> }, skillKey: string) => {
        if (skillCircuitArray[skillKey].length === 0) return null;

        return skillCircuitArray[skillKey].map((circuit, index) => {
            return <Circuit key={`$${skillKey}-circuit-${index}`} version={circuit.version} coordinate={circuit.coordinate} rotation={circuit.rotation} />
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
                        {generateCircuit(skillCircuitMap, skillKey)}
                        <Skill title={skill.title} description={skill.description} location={skill.location} img={skill.img} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};