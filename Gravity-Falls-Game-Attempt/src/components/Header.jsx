import logo from '../assets/img/logo.png';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="headerContainer">
            <img src={logo} alt='logo-header'/>
            <div className="score"><div>Score: 0</div><div>Best score: 0</div></div>
            </div>
        </header>

        
    )
}

export default Header;