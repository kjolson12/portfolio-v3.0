import './Chip.css';

interface ChipProps {
    title?: string;
};

export default function Chip ({ title }: ChipProps) {
    const numofNodes = 16;
    const nodeArray = [];

    const generateNodeStyle = (index: number, title: string | undefined) => {
        const unit = 17;

        if (title === 'online') {
            if (index < 4) {
                return { top: `-${unit}px`, left: `${index * unit}px` };
            } else if (index < 8) {
                return { right: `-${unit}px`, top: `${(index - 4 )* unit}px` };
            } else if (index < 12) {
                return { bottom: `-${unit}px`, right: `${(index - 8) * unit}px` };
            } else if (index < 16) {
                return { left: `-${unit}px`, bottom: `${(index - 12) * unit}px` };
            }
        } else if (title === 'offline') {
            if (index < 4) {
                return { top: `-${unit}px`, left: `${index * unit}px` };
            } else if (index < 8) {
                return { right: `-${unit}px`, top: `${(index - 4 )* unit}px` };
            } else if (index < 12) {
                return { bottom: `-${unit}px`, right: `${(index - 8) * unit}px` };
            } else if (index < 16) {
                return { left: `-${unit}px`, bottom: `${(index - 12) * unit}px` };
            }
        }
    }
    
    for (let i = 0; i < numofNodes; i++) {
        nodeArray.push(<div className={`chip-node chip-node-${i}`} key={`${title}chip-node-${i}`} style={generateNodeStyle(i, title)}></div>);
    }

    return (
        <div className="chip-container">
            <div id={`${title}-chip`} className="chip">
                {nodeArray}
                <span className="chip-title">{title}</span>
            </div>
        </div>
    );
};