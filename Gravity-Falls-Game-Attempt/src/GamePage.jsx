// import React from 'react';
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import { motion } from "framer-motion"; 
// import './GamePage.css';

function GamePage() {
  const { difficulty } = useParams();

  const renderGameContent = () => {
    switch (difficulty) {
      case "easy":
        return <p>Easy game content</p>;

      case "medium":
        return <p>Medium game content</p>;
      case "hard":
        return <p>Hard game content</p>;
      default:
        return <p>Invalid difficulty level</p>;
    }
  };

  return (
    <motion.div 
    initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="game-page"
    >
 {/* <div className="game-page"> */}
      <Header />
      <h2>
        Game Page - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </h2>
      {renderGameContent()}
    </motion.div>
  );
}

export default GamePage;
