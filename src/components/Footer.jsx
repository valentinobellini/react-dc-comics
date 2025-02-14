// crea componente header.jsx
export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div className="links-wrapper">


                    {/* props */}
                    {props.footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4>{section.sectionTitle}</h4>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.url}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}



                </div>
                <div>
                    <div className="big-logo">
                        <img src="/img/dc-logo-bg.png" alt="logo" />
                    </div>
                </div>

            </div>
            <div className="footer-low">
                <button className="signup-button">SIGN-UP NOW!</button>
                <div className="social-media">
                    <span>FOLLOW US</span>
                    <a href="#"><img src="/img/footer-facebook.png" alt="Twitter" /></a>
                    <a href="#"><img src="/img/footer-twitter.png" alt="YouTube" /></a>
                    <a href="#"><img src="/img/footer-youtube.png" alt="Pinterest" /></a>
                    <a href="#"><img src="/img/footer-pinterest.png" alt="Pinterest" /></a>
                    <a href="#"><img src="/img/footer-periscope.png" alt="Pinterest" /></a>
                </div>
            </div>
        </footer>);
};