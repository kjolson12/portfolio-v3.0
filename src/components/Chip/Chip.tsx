import './Chip.css';

interface ChipProps {
    title?: string;
};

export default function Chip ({ title }: ChipProps) {
    const numofNodes = 16;
    const nodeArray = [];

    const generateNodeStyle = (index: number, title: string | undefined) => {
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
        nodeArray.push(<div className={`chip-node chip-node-${i}`} key={`${title}chip-node-${i}`} style={generateNodeStyle(i, title)}></div>);
    }

    return (
        <div className="chip-container">
            {nodeArray}
            <div id={`${title}-chip`} className="chip">
                <span className="chip-title">{title}</span>
            </div>
        </div>
    );
};