import emailIcon from '../assets/email.svg';

function MainContainer() {
    return (
        <div className="mainContainer">
            <div className="mainColumns">
                <div className="leftColumn">
                    <div className="leftColumnContent">
                        <h1>Refer friends and<br></br>get reward</h1>
                        <h3>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</h3>
                        <form action="submit">
                            <label htmlFor="">Error state</label>
                            <div className="inputContainer">
                                <img src={emailIcon} alt="emailIcon" />
                                <input type="email" placeholder="Enter your email address" />
                            </div>
                            <button>Get referral link</button>
                        </form>
                        <h4>Limits on max rewards apply.</h4>
                    </div>
                </div>
                <div className="rightColumn"></div>
            </div>
        </div>
    );
}

export default MainContainer;