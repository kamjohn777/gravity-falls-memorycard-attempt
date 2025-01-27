import logo from "../assets/img/logo.png";
import "./HomeScreen.css";
import { useClickSound } from "./Context/ClickSoundContext";
// import Footer from './Footer';

function HomeScreen() {
  const homeScreenBtns = ["Easy", "Medium", "Hard"];
  const { playClickSound } = useClickSound();

  return (
    <div className="homescreen-logo-content-wrap">
      <img src={logo} alt="Gravity-Falls-Logo" />
      <h2>Memory Game</h2>
      <ul>
        {homeScreenBtns.map((homeBtns) => {
          return (
            <li key={homeBtns}>
              <button onClick={playClickSound}>{homeBtns}</button>
            </li>
          );
        })}
      </ul>
      {/* <Footer /> */}
    </div>
  );
}

export default HomeScreen;
