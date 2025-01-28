import logo from '../assets/img/logo.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
const navigate = useNavigate();

    const LogoBtnToHomeClick = () => {
        navigate('/');
    };

    return (
        <header>
            <div onClick={LogoBtnToHomeClick} className="headerContainer">
            <img src={logo} alt='logo-header'/>
            <div className="score"><div>Score: 0</div><div>Best score: 0</div></div>
            </div>
        </header>

        
    )
}

export default Header;