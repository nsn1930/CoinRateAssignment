import chrome from '../assets/chrome.svg'
import apple from '../assets/apple.svg'
import star from '../assets/star.svg'

function StoreFooter() {
    return (
        <div className="appsContainer">
            <div className="appsStores">
                <a href='.' className="appsButton">
                    <img src={chrome} alt="chrome" />
                    <div className="buttonText">
                        <h3>available in the</h3>
                        <h2>chrome web store</h2>
                    </div>
                </a>
                <a href='.' className="appsButton">
                    <img src={apple} alt="apple" />
                    <div className="buttonText">
                        <h3>available in the</h3>
                        <h2>apple app store</h2>
                    </div>
                </a>
                <div className="starRating">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <h2>Chrome Store reviews</h2>
                </div>
            </div>
        </div>
    )
}

export default StoreFooter;