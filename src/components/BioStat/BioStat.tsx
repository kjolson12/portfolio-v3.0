import './BioStat.css';

interface BioStatProps {
    stat: string;
    text: string;
}

export default function BioStat({ stat, text }: BioStatProps) {
    return (
        <div className="bio-stat hover-animation">
            <h2>{stat}</h2>
            <p className='bio-stat-text'>{text}</p>
        </div>
    );
}