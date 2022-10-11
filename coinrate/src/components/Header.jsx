import logo from '../assets/logo.svg';

function Header() {
    return (
        <div className='header'>
            <img className='logoCoin' src={logo} alt="logo" />
        </div>
    );
}

export default Header;