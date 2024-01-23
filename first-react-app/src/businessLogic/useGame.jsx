import { useState } from "react";

export function useGame() {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentBoardSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
 

  return { isFirstPlayer, history, currentBoardSquares, handlePlay };
}
