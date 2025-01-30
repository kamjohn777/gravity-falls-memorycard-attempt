import logo from "../assets/img/logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import { ClickSoundProvider } from "../components/Context/ClickSoundContext";
import { useClickSound } from "../components/Context/ClickSoundContext";
//Passing score and bestScore as props to use in the GamePage component
function Header({ score, bestScore }) {
    const { playClickSound } = useClickSound();
  const navigate = useNavigate();

  const LogoBtnToHomeClick = () => {
    navigate("/");
    playClickSound();
  };

  return (

    <header>
      <div className="headerContainer">
        <img onClick={LogoBtnToHomeClick}  src={logo} alt="logo-header" />
        <div className="score">
          <div>Score: {score}</div>
          <div>Best score: {bestScore}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
