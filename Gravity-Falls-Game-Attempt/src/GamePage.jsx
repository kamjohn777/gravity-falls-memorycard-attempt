import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header"; // Corrected import path
import { motion } from "framer-motion";
import characters from "./components/GameComponents/Characters";
import { shuffleArray } from "./Utils";
import ReactCardFlip from "react-card-flip";
import Tilt from "react-parallax-tilt";
import OutComeDisplay from "./components/OutcomeDisplay";
import "./GamePage.css";

function GamePage() {
  const { difficulty } = useParams();
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState({});
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    let numCards, numCharacters;
    switch (difficulty) {
      case "easy":
        numCards = 3;
        numCharacters = 5;
        break;
      case "medium":
        numCards = 4;
        numCharacters = 7;
        break;
      case "hard":
        numCards = 5;
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
    //   alert("You lost! You selected the same card twice.");
    setGameState("lost")
      setScore(0);
      setSelectedCards([]);
      setIsFlipped({});
    } else {
      setSelectedCards([...selectedCards, card.id]);
      setScore(score + 1);

      // Flip all cards
      const newFlippedState = {};
      cards.forEach((c) => {
        newFlippedState[c.id] = true;
      });
      setIsFlipped(newFlippedState);

      setTimeout(() => {
        // Flip all cards back and shuffle them
        const shuffledCards = shuffleArray(characters).slice(0, cards.length);
        const resetFlippedState = {};
        shuffledCards.forEach((c) => {
          resetFlippedState[c.id] = false;
        });
        setIsFlipped(resetFlippedState);
        setCards(shuffledCards);
      }, 1000);

      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      if (selectedCards.length === 0) {
        setCards(shuffleArray(cards));
      }

      if (score + 1 === cards.length) {
        setGameState("won");
      }
    }
  };

  const resetGame = () => {
    setGameState(null);
    setScore(0);
    setSelectedCards([]);
        setIsFlipped([]);
        const selectedCharacters = shuffleArray(characters).slice(0, cards.length);
    const gameCards = shuffleArray(selectedCharacters).slice(0, cards.length);
    setCards(gameCards);
    
  };

  const renderGameContent = () => {
    return (
      <div className="cards-container">
        <div className="cardFace">
          {cards.map((card) => (
            <Tilt
            // onClick={() => handleCardClick(card)}
            //   className="card-sub-container"
              key={card.id}
            //   glareEnable={true}
            //   glareMaxOpacity={0.25}
            //   glareColor="#ffffff"
            //   glarePosition="all"
            //   glareBorderRadius="10px"
            //   perspective={700}
            //   scale={1.02}
            >
              <ReactCardFlip
                className="card-flip-wrap"
                isFlipped={isFlipped[card.id]}
                flipDirection="horizontal"
                // onClick={() => handleCardClick(card.id)}
              >
                <div className="card" onClick={() => handleCardClick(card)}>
                  <img src={card.src} alt={card.name} />
                  <p>{card.name}</p>
                </div>
                <div className="card" onClick={() => handleCardClick(card)}>
                  <div className="card-back">
                    {/* <p>Back</p> */}
                  </div>
                </div>
              </ReactCardFlip>
            </Tilt>
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
     <Header score={score} bestScore={bestScore} />
      {gameState ? (
        <OutComeDisplay gameState={gameState} onReset={resetGame} />
      ) : (
        renderGameContent()
      )}
    </motion.div>
  );
}

export default GamePage;
