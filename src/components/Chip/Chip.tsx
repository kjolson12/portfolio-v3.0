import './Chip.css';

interface ChipProps {
    title?: string;
};

export default function Chip ({ title }: ChipProps) {
    const numofNodes = 16;
    const nodeArray = [];

    const generateNodeStyle = (index: number, title: string | undefined) => {
        const unit = 16;

        if (title === 'online') {
            if (index < 4) {
                return { top: `-${unit - 2}px`, left: `${index * unit + (unit * 1.5) + 1}px` };
            } else if (index < 8) {
                return { right: `-${unit - 2}px`, top: `${(index - 4)* unit + (unit * 1.5) + 1}px` };
            } else if (index < 12) {
                return { bottom: `-${unit - 2}px`, right: `${(index - 8) * unit + (unit * 1.5) + 1}px` };
            } else if (index < 16) {
                return { left: `-${unit - 2}px`, bottom: `${(index - 12) * unit + (unit * 1.5) + 1}px` };
            }
        } else if (title === 'offline') {
            if (index < 4) {
                return { top: `-${unit - 2}px`, left: `${index * unit + (unit * 1.5) + 1}px` };
            } else if (index < 8) {
                return { right: `-${unit - 2}px`, top: `${(index - 4)* unit + (unit * 1.5) + 1}px` };
            } else if (index < 12) {
                return { bottom: `-${unit - 2}px`, right: `${(index - 8) * unit + (unit * 1.5) + 1}px` };
            } else if (index < 16) {
                return { left: `-${unit - 2}px`, bottom: `${(index - 12) * unit + (unit * 1.5) + 1}px` };
            }
        }
    }
    
    for (let i = 0; i < numofNodes; i++) {
        nodeArray.push(<div className={`chip-node chip-node-${i}`} key={`${title}chip-node-${i}`} style={generateNodeStyle(i, title)}></div>);
    }

    return (
        <div id={`${title}-chip`} className="chip">
            {nodeArray}
            <span className="chip-title">{title}</span>
        </div>
    );
};