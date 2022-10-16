import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import tiktok from '../assets/tiktok.svg';

function Social() {
    return (
        <div className="social">
            <h1>Social</h1>
            <div className="socialLinks">
                <img className='socIcons' src={instagram} alt="instagram" />
                <img className='socIcons' src={facebook} alt="facebook" />
                <img className='socIcons' src={linkedin} alt="linkedin" />
                <img className='socIcons' src={twitter} alt="twitter" />
                <img className='socIcons' src={tiktok} alt="tiktok" />
            </div>
        </div>
    )
}
export default Social;