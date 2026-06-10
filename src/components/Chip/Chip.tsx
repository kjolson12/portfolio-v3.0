import React, { useState, useEffect } from 'react';
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
    title?: keyof typeof activeNodes;
    skillsObject?: {
        [key: string]: {
            title: string,
            description: string,
            location: {
                'desktop': Array<number>,
                'laptop': Array<number>,
                'tablet': Array<number>,
                'mobile': Array<number>,
            },
            img: string,
        }
    };
    activeSection?: string;
};

const activeNodes = {
    'online': [0, 3, 4, 7, 9, 10, 13],
    'offline': [1, 2 , 5, 8, 9, 12],
}

export default function Chip ({ title, skillsObject, activeSection }: ChipProps) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const numofNodes = 16;
    const nodeArray = [];

    const generateNodeStyle = (index: number) => {
        if (windowWidth > 1200) {
            if (index < 4) {
                return { gridRowStart: `15`, gridColumnStart: `${26 + (index * 3)}` };
            } else if (index < 8) {
                return { gridColumnStart: `38`, gridRowStart: `${18 + ((index - 4) * 3)}` };
            } else if (index < 12) {
                return { gridRowStart: `30`, gridColumnStart: `${26 + ((index - 8) * 3)}` };
            } else if (index < 16) {
                return { gridColumnStart: `23`, gridRowStart: `${18 + ((index - 12) * 3)}` };
            }
        } else if (windowWidth <= 1200 && windowWidth > 1024) {
            if (index < 4) {
                return { gridRowStart: `15`, gridColumnStart: `${24 + (index * 3)}` };
            } else if (index < 8) {
                return { gridColumnStart: `36`, gridRowStart: `${18 + ((index - 4) * 3)}` };
            } else if (index < 12) {
                return { gridRowStart: `30`, gridColumnStart: `${24 + ((index - 8) * 3)}` };
            } else if (index < 16) {
                return { gridColumnStart: `21`, gridRowStart: `${18 + ((index - 12) * 3)}` };
            }
        } else if (windowWidth <= 1024 && windowWidth > 500) {
            if (index < 4) {
                return { gridRowStart: `15`, gridColumnStart: `${23 + (index * 2)}` };
            } else if (index < 8) {
                return { gridColumnStart: `32`, gridRowStart: `${18 + ((index - 4) * 2)}` };
            } else if (index < 12) {
                return { gridRowStart: `27`, gridColumnStart: `${23 + ((index - 8) * 2)}` };
            } else if (index < 16) {
                return { gridColumnStart: `20`, gridRowStart: `${18 + ((index - 12) * 2)}` };
            }
        } else {
            if (index < 4) {
                return { gridRowStart: `22`, gridColumnStart: `${16 + (index * 2)}` };
            } else if (index < 8) {
                return { gridColumnStart: `25`, gridRowStart: `${25 + ((index - 4) * 2)}` };
            } else if (index < 12) {
                return { gridRowStart: `34`, gridColumnStart: `${16 + ((index - 8) * 2)}` };
            } else if (index < 16) {
                return { gridColumnStart: `13`, gridRowStart: `${25 + ((index - 12) * 2)}` };
            }
        }
    }
    
    for (let i = 0; i < numofNodes; i++) {
        if (activeNodes[title!].includes(i)) {
            nodeArray.push(<div className={`chip-node chip-node-${i} active`} key={`${title}chip-node-${i}`} style={generateNodeStyle(i)}></div>);
        } else {
            nodeArray.push(<div className={`chip-node chip-node-${i}`} key={`${title}chip-node-${i}`} style={generateNodeStyle(i)}></div>);
        }
    }

    const generateCircuit = (
        skillCircuitMap: {
            [key: string]:{
                [key: string]: Array<{ coordinate: Array<number>, rotation: number , version: string}>
            }
        }, skillKey: string
    ) => {
        let map: Array<{ coordinate: Array<number>, rotation: number, version: string }> = [];

        if (windowWidth > 1200) {
            map = skillCircuitMap[skillKey]['desktop'];
        } else if (windowWidth <= 1200 && windowWidth > 1024) {
            map = skillCircuitMap[skillKey]['laptop'];
        } else if (windowWidth <= 1024 && windowWidth > 500) {
            map = skillCircuitMap[skillKey]['tablet'];
        } else {
            map = skillCircuitMap[skillKey]['mobile'];
        }

        if (map.length === 0) return null;

        return map.map((circuit, index) => {
            return <Circuit key={`$${skillKey}-circuit-${index}`} version={circuit.version} coordinate={circuit.coordinate} rotation={circuit.rotation} />
        });
    }

    const generateSkillLocation = (skill: { location: { desktop: Array<number>, laptop: Array<number>, tablet: Array<number>, mobile: Array<number> } }) => {
        let location;

        if (windowWidth > 1200) {
            location = skill.location.desktop;
        } else if (windowWidth <= 1200 && windowWidth > 1024) {
            location = skill.location.laptop;
        } else if (windowWidth <= 1024 && windowWidth > 500) {
            location = skill.location.tablet;
        } else {
            location = skill.location.mobile;
        }

        return location;
    }


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                        <Skill title={skill.title} description={skill.description} location={generateSkillLocation(skill) || []} img={skill.img} activeSection={activeSection} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};