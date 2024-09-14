import { useState, useEffect } from "react";

const initialBoard = (size) => Array(size * size).fill(null);

const useTicTacToe = (boardSize) => {
  const [board, setBoard] = useState(initialBoard(boardSize));
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    // When the boardSize changes, reset the board accordingly
    setBoard(initialBoard(boardSize));
    setIsXNext(true); // Reset the turn to X
  }, [boardSize]);

  const generateWinningPatterns = () => {
    const patterns = [];

    for (let i = 0; i < boardSize; i++) {
      const horizontalPattern = [];
      const verticalPattern = [];
      for (let j = 0; j < boardSize; j++) {
        horizontalPattern.push(i * boardSize + j);
        verticalPattern.push(j * boardSize + i);
      }
      patterns.push(horizontalPattern, verticalPattern);
    }

    const diagonal1 = [];
    const diagonal2 = [];

    for (let i = 0; i < boardSize; i++) {
      diagonal1.push(i * (boardSize + 1));
      diagonal2.push((i + 1) * (boardSize - 1));
    }
    patterns.push(diagonal1, diagonal2);
    return patterns;
  };

  const WINNING_PATTERNS = generateWinningPatterns();

  // const WINNING_PATTERNS = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ];

  const calculateWinner = (currentBoard) => {
    let n = WINNING_PATTERNS.length;

    for (let i = 0; i < n; i++) {
      // const [a, b, c] = WINNING_PATTERNS[i];

      const pattern = WINNING_PATTERNS[i];
      let countX = 0;
      let countO = 0;

      for (let j = 0; j < n; j++) {
        const cell = currentBoard[pattern[j]];
        if (cell === "X") {
          countX++;
        } else if (cell === "O") {
          countO++;
        }
      }

      if (countX === boardSize) return "X";
      if (countO === boardSize) return "O";

      // if (
      //   currentBoard[a] &&
      //   currentBoard[a] === currentBoard[b] &&
      //   currentBoard[a] === currentBoard[c]
      // ) {
      //   return currentBoard[a];
      // }
    }
    return null;
  };

  const handleClick = (index) => {
    // check winner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard(boardSize));
    setIsXNext(true); // Reset to player X's turn
  };

  return { board, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
