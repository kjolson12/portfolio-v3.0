import './BioStat.css';

interface BioStatProps {
    stat: string;
    text: string;
}

export default function BioStat({ stat, text }: BioStatProps) {
    return (
        <div className="bio-stat hover-animation">
            <h3 className="bio-stat-number">{stat}</h3>
            <p className='bio-stat-text'>{text}</p>
        </div>
    );
}