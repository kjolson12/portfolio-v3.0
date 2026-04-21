import './Circuit.css';

interface CircuitProps {
    coordinate: Array<number>;
    rotation: number;
};

export default function Circuit ({ coordinate, rotation }: CircuitProps) {
    console.log('rendering circuit with coordinate:', coordinate, 'and rotation:', rotation);

    const style = {
        gridColumnStart: `${coordinate[0]}`,
        gridRowStart: `${coordinate[1]}`,
        transform: `rotate(${rotation}deg)`
    };

    return (
        <div className="circuit-container" style={style}>
            <div className="circuit"></div>
        </div>
    );
};