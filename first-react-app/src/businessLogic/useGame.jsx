import { useState } from "react";

export function useGame() {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentBoardSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsFirstPlayer(!isFirstPlayer);
  }
 
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setIsFirstPlayer(nextMove%2 === 0)
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start'
    }
    return (
      <li key = {move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });


  return { isFirstPlayer, history, currentBoardSquares, handlePlay, moves };
}
