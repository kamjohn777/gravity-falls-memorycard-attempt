import lost from "../assets/img/lost.jpg";
import win from "../assets/img/won.avif";
import { motion } from "framer-motion";
import "./OutcomeDisplay.css";

function OutComeDisplay({ gameState, onReset }) {
  return (
    <motion.div
      className="outcome-display"
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <img src={gameState === "lost" ? lost : win} alt="Game Over" />
      <button onClick={onReset}>Reset</button>
    </motion.div>
  );
}

export default OutComeDisplay;