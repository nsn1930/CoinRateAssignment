import logo from '../assets/logo.svg';

function Header() {
    return (
        <div className="headerContainer">
            <div className='header'>
                <img className='logoCoin' src={logo} alt="logo" />
                <div className='headerLinks'>
                    <a href=".">Chrome extention</a>
                    <a href=".">Price compartion</a>
                    <a href=".">Blog</a>
                </div>
            </div>
        </div>
    );
}

export default Header;