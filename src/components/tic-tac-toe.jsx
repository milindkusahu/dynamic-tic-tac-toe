import React, { useState } from "react";
import { RefreshCw, X, Circle } from "lucide-react";
import useTicTacToe from "../hooks/use-tic-tac-toe";

const TicTacToe = ({ initialBoardSize = 3 }) => {
  const [currentBoardSize, setCurrentBoardSize] = useState(initialBoardSize);
  const { board, handleClick, getStatusMessage, resetGame } =
    useTicTacToe(currentBoardSize);

  const handleBoardSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setCurrentBoardSize(newSize);
    resetGame();
  };

  return (
    <div className="game" style={{ "--board-size": currentBoardSize }}>
      <h2 className="game-title">{getStatusMessage()}</h2>
      <div className="game-controls">
        <div className="status"></div>
        <select
          onChange={handleBoardSizeChange}
          value={currentBoardSize}
          className="board-size-select"
        >
          {[3, 4, 5, 6].map((size) => (
            <option key={size} value={size}>
              {size} x {size}
            </option>
          ))}
        </select>
      </div>
      <div className="board">
        {board.map((cell, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled={cell !== null}
          >
            {cell === "X" && <X className="cell-icon" />}
            {cell === "O" && <Circle className="cell-icon" />}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>
        <RefreshCw size={18} />
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
