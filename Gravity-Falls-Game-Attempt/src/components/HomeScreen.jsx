import logo from "../assets/img/logo.png";
import "./HomeScreen.css";
import { useClickSound } from "./Context/ClickSoundContext";
import { motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
// import Footer from './Footer';

function HomeScreen() {
  const homeScreenBtns = ["Easy", "Medium", "Hard"];
  const { playClickSound } = useClickSound();
  const navigate = useNavigate();

  const handleBtnClick = (difficulty) => {
    playClickSound();
    navigate(`/game/${difficulty.toLowerCase()}`);
  }

  return (
    //AnimatePresence is used to also animate the exit of the component but since we are rendering it only once we dont need to do this
    // <AnimatePresence>
        <motion.div
            initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="homescreen-logo-content-wrap"
    >
        {/* <div className="homescreen-logo-content-wrap"> */}
      <img src={logo} alt="Gravity-Falls-Logo" />
      <h2>Memory Game</h2>
      <ul>
        {homeScreenBtns.map((homeBtns) => {
          return (
            <li key={homeBtns}>
              <button onClick={() => handleBtnClick(homeBtns)}>{homeBtns}</button>
            </li>
          );
        })}
      </ul>
      {/* <Footer /> */}
    {/* </div> */}
        </motion.div>
    
  );
}

export default HomeScreen;
