import './Footer.css';

export default function Footer() {
    return (
        <footer>
                <div id="bio-image-and-title-footer">
                    <div id="bio-image-footer" className='hover-animation'></div>
                    <div id="bio-title-footer">
                        <h3>Kyle Olson</h3>
                        <h4>Website Developer</h4>
                        <div id="socials">
                            <div className="social-container">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                            <div className="social-container">
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <div id="contact">
                <h3>Get in touch</h3>
                <div id="contact-info-container">
                    <div className='contact-info'>
                        <p className='contact-info-category'>email</p>
                        <p className='contact-info-value'>
                            <a href="mailto:kjolson2016@gmail.com">kjolson2016@gmail.com</a>
                        </p>
                    </div>
                    <div className='contact-info'>
                        <p className='contact-info-category'>phone</p>
                        <p className='contact-info-value'>
                            <a href="tel:714-873-5571">714-873-5571</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}