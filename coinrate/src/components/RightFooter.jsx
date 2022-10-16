import email from '../assets/email-footer.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import tiktok from '../assets/tiktok.svg';

function RightFooter() {
    return (
        <div className="rightColumnFooter">
            <div className="rightFooterContent">
                <div className="quickLinks">
                    <h1>Quick links</h1>
                    <div className="linksFooter">
                        <a href=".">Price compartion</a>
                        <a href=".">Chrome extention</a>
                        <a href=".">How it works</a>
                        <a href=".">Ratepunk blog</a>
                        <a href=".">Privacy policy</a>
                    </div>
                </div>
                <div className="contact">
                    <h1>Contact</h1>
                    <div className="contactMail">
                        <img className='email' src={email} alt="email" />
                        <h3>hi@ratepunk.com</h3>
                    </div>
                </div>
                <div className="social">
                    <h1>Social</h1>
                    <div className="socialLinks">
                        <img className='instagram' src={instagram} alt="instagram" />
                        <img className='facebook' src={facebook} alt="facebook" />
                        <img className='linkedin' src={linkedin} alt="linkedin" />
                        <img className='twitter' src={twitter} alt="twitter" />
                        <img className='tiktok' src={tiktok} alt="tiktok" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RightFooter;