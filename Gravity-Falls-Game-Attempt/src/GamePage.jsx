import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header"; // Corrected import path
import { motion } from "framer-motion";
import characters from "./components/GameComponents/Characters";
import { shuffleArray } from "./Utils";
import "./GamePage.css";

function GamePage() {
  const { difficulty } = useParams();
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    let numCards, numCharacters;
    switch (difficulty) {
      case "easy":
        numCards = 3;
        numCharacters = 5;
        break;
      case "medium":
        numCards = 5;
        numCharacters = 7;
        break;
      case "hard":
        numCards = 7;
        numCharacters = 10;
        break;
      default:
        numCards = 3;
        numCharacters = 5;
    }

    const selectedCharacters = shuffleArray(characters).slice(0, numCharacters);
    const gameCards = shuffleArray(selectedCharacters).slice(0, numCards);
    setCards(gameCards);
  }, [difficulty]);

  const handleCardClick = (card) => {
    if (selectedCards.includes(card.id)) {
      alert("You lost! You selected the same card twice.");
      setScore(0);
      setSelectedCards([]);
    } else {
      setSelectedCards([...selectedCards, card.id]);
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      if (selectedCards.length === 0) {
        setCards(shuffleArray(cards));
      }
    }
  };

  const renderGameContent = () => {
    return (
      <div className="cards-container">
        <div className="cardFace">
        {cards.map((card) => (
            
          <div key={card.id} className="card" onClick={() => handleCardClick(card)}>
            <img src={card.src} alt={card.name} />
            <p>{card.name}</p>

            {/* <div class="cardFace"><div class="characterHolder" style="background-image: url(&quot;/memory-card/static/media/ford.0067daebae9115c1423f.png&quot;);"></div><div class="name">Ford</div></div> */}
          </div>
          
        ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="game-page"
    >
      <Header />
      <h2>
        Game Page - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </h2>
      <div className="scoreboard">
        <div>Score: {score}</div>
        <div>Best score: {bestScore}</div>
      </div>
      {renderGameContent()}
    </motion.div>
  );
}

export default GamePage;