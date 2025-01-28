import logo from "../assets/img/logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

//Passing score and bestScore as props to use in the GamePage component
function Header({ score, bestScore }) {
  const navigate = useNavigate();

  const LogoBtnToHomeClick = () => {
    navigate("/");
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
