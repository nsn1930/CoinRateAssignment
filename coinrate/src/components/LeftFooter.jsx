import logo from '../assets/logo.svg';

function LeftFooter() {
    return (
        <div className="leftColumnFooter">
            <div className="leftFooterContent">
                <img className='logoCoin' src={logo} alt="logo" />
                <h2>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</h2>
                <h3>© 2021 Ratepunk. All Rights Reserved.</h3>
            </div>
        </div>
    )
}
export default LeftFooter;