import './Chip.css';

interface ChipProps {
    title?: string;
};

export default function Chip ({ title }: ChipProps) {
    const numofNodes = 16;
    const nodeArray = [];

    const generateNodeStyle = (index: number, title: string | undefined) => {
        const unit = 14;
        let multiplier = 1;

        if (title === 'online') {
            if (index < 4) {
                if (index > 1) multiplier = 2;
                return { top: `-${unit}px`, left: `${index * unit * multiplier}px` };
            } else if (index < 8) {
                if (index > 6) multiplier = 2;
                return { right: `-${unit}px`, top: `${(index - 4)* unit * multiplier}px` };
            } else if (index < 12) {
                if (index > 10) multiplier = 2;
                return { bottom: `-${unit}px`, right: `${(index - 8) * unit * multiplier}px` };
            } else if (index < 16) {
                if (index > 13) multiplier = 2;
                return { left: `-${unit}px`, bottom: `${(index - 12) * unit * multiplier}px` };
            }
        } else if (title === 'offline') {
            if (index < 4) {
                if (index > 2) multiplier = 2;
                return { top: `-${unit}px`, left: `${index * unit * multiplier}px` };
            } else if (index < 8) {
                if (index > 5) multiplier = 2;
                return { right: `-${unit}px`, top: `${(index - 4)* unit * multiplier}px` };
            } else if (index < 12) {
                if (index > 9) multiplier = 2;
                return { bottom: `-${unit}px`, right: `${(index - 8) * unit * multiplier}px` };
            } else if (index < 16) {
                if (index > 13) multiplier = 2;
                return { left: `-${unit}px`, bottom: `${(index - 12) * unit * multiplier}px` };
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