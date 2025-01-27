// import React from 'react';
import { useParams } from 'react-router-dom';
// import './GamePage.css';

function GamePage() {
  const { difficulty } = useParams();

  const renderGameContent = () => {
    switch (difficulty) {
      case 'easy':
        return <p>Easy game content</p>;
      case 'medium':
        return <p>Medium game content</p>;
      case 'hard':
        return <p>Hard game content</p>;
      default:
        return <p>Invalid difficulty level</p>;
    }
  };

  return (
    <div className="game-page">
      <h2>Game Page - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h2>
      {renderGameContent()}
    </div>
  );
}

export default GamePage;