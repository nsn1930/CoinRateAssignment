import emailIcon from '../assets/email.svg';
import coinMail from '../assets/invite.svg';
import collectCoin from '../assets/collect-coins.svg';
import voucher from '../assets/voucher.svg';

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
                <div className="rightColumn">
                    <div className='step1'>
                        <img src={coinMail} alt="coinMail" />
                        <div className='stepCount'>
                            <h2>Step 1</h2>
                            <h1>Invite friends</h1>
                            <h3>Refer friends with your unique referral link.</h3>
                        </div>
                    </div>
                    <div className='step2'>
                        <div className='stepCount'>
                            <h2>Step 2</h2>
                            <h1>Collect coins</h1>
                            <h3>Get 1 coin for each friend that installs our extension using your referral link.</h3>
                        </div>
                        <img src={collectCoin} alt="collectCoin" />
                    </div>
                    <div className='step3'>
                        <img src={voucher} alt="voucher" />
                        <div className='stepCount'>
                            <h2>Step 3</h2>
                            <h1>Get voucher</h1>
                            <h3>Redeem for a $20 hotel booking voucher once you collect 20 coins.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;