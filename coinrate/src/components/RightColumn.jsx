import coinMail from '../assets/invite.svg';
import collectCoin from '../assets/collect-coins.svg';
import voucher from '../assets/voucher.svg';

function RightColumn() {
    return (
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
                <img src={collectCoin} alt="collectCoin" />
                <div className='stepCount'>
                    <h2>Step 2</h2>
                    <h1>Collect coins</h1>
                    <h3>Get 1 coin for each friend that installs our extension using your referral link.</h3>
                </div>
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
    )
}

export default RightColumn;