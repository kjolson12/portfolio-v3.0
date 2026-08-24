export default function ResumeButton ({ windowWidth, version }: { windowWidth? : number, version? : string }) {
    let buttonText;

    if (version === 'header' && windowWidth !== undefined && windowWidth <= 500) {
        buttonText = 'Resume';
    } else {
        buttonText = 'Download Resume';
    }

    return (
        <div>
            <button className='button button-secondary'><a href="/resume.pdf" target="_blank">{buttonText}</a></button>
        </div>
    );
};