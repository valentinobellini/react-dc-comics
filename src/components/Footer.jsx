// crea componente header.jsx
export default function Footer() {
    return (<footer className="footer">
        <div className="footer-wrapper">
            <div className="footer-links">
                <div className="links-wrapper">
                    <div>
                        <h4>DC COMICS</h4>
                        <ul>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>SHOP</h4>
                        <ul>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>DC</h4>
                        <ul>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshop</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>SITES</h4>
                        <ul>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
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
        </div>
    </footer>);
};