import './About.css';

export default function About () {
    return (
        <div id="about-container">
            <div className="typewriter-container">
                <h2 className="typewriter">About</h2>
            </div>
            <div id="chips-container">
                <div className="chip-container">
                    <div id="online-chip" className="chip">
                        <div className="chip-node" id="chip-node-1"></div>
                        <div className="chip-node" id="chip-node-2"></div>
                        <div className="chip-node" id="chip-node-3"></div>
                        <div className="chip-node" id="chip-node-4"></div>
                        <div className="chip-node" id="chip-node-5"></div>
                        <div className="chip-node" id="chip-node-6"></div>
                        <div className="chip-node" id="chip-node-7"></div>
                        <div className="chip-node" id="chip-node-8"></div>
                        <div className="chip-node" id="chip-node-9"></div>
                        <div className="chip-node" id="chip-node-10"></div>
                        <div className="chip-node" id="chip-node-11"></div>
                        <div className="chip-node" id="chip-node-12"></div>
                        <div className="chip-node" id="chip-node-13"></div>
                        <div className="chip-node" id="chip-node-14"></div>
                        <div className="chip-node" id="chip-node-15"></div>
                        <div className="chip-node" id="chip-node-16"></div>
                        <span className="chip-text">Online</span>
                    </div>
                </div>
                <div className="chip-container">
                    <div id="offline-chip" className="chip">
                        <span className="chip-text">Offline</span>
                    </div>
                </div>
            </div>
        </div>
    );
};