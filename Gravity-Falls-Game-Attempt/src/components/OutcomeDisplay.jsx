import React from "react";
import PropTypes from "prop-types";
import lost from "../assets/img/lost.jpg";
import win from "../assets/img/won.avif";
import { motion } from "framer-motion";
import "./OutcomeDisplay.css";

function OutComeDisplay({ gameState, onReset }) {
  const backgroundImage = gameState === "lost" ? `url(${lost})` : `url(${win})`;
  const backgroundColor = gameState === "lost" ? "red" : "blue";
  const message = gameState === "lost" ? "You lost!" : "You won!";
  const messageClass = gameState === "lost" ? "message-lost" : "message-won";
  const outcomeClass = gameState === "lost" ? "outcome-lost" : "outcome-won";

  return (
    <motion.div
      className={`outcome-display ${outcomeClass}`}
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      style={{ backgroundImage, backgroundColor }}
    >
      <div className="outcome-text-wrap">
        <p className={messageClass}>{message}</p>
        <button onClick={onReset}>Reset</button>
      </div>
    </motion.div>
  );
}


export default OutComeDisplay;