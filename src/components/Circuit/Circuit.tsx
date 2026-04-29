import './Circuit.css';

interface CircuitProps {
    version: string;
    coordinate: Array<number>;
    rotation: number;
};

const strokeColor = '#00ff00';
const strokeWidth = 30;

const straightCircuit = (
    <line x1="50" y1="0" x2="50" y2="100" stroke={strokeColor} strokeWidth={strokeWidth} />
);

const elbowCircuit = (
    <>
        <line x1="50" y1="0" x2="50" y2="54" stroke={strokeColor} strokeWidth={strokeWidth} />
        <line x1="46" y1="46" x2="100" y2="100" stroke={strokeColor} strokeWidth={strokeWidth} />
    </>
);

const curveCircuit = (
    <path d="M 50 0 Q 50 50 100 50" stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
);

const diagonalCircuit = (
    <line x1="0" y1="0" x2="100" y2="100" stroke={strokeColor} strokeWidth={strokeWidth} />
);

export default function Circuit({ version, coordinate, rotation }: CircuitProps) {
    const style = {
        gridColumnStart: `${coordinate[0]}`,
        gridRowStart: `${coordinate[1]}`,
        transform: `rotate(${rotation}deg)`
    };

    const renderCircuit = () => {
        switch (version) {
            case 'straight':
                return straightCircuit;
            case 'elbow':
                return elbowCircuit;
            case 'curve':
                return curveCircuit;
            case 'diagonal':
                return diagonalCircuit;
            default:
                return null;
        }
    }

    return (
        <svg
            className="circuit-container"
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            {renderCircuit()}
        </svg>
    );
};