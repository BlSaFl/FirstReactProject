import { useState } from "react";

export function useGame() {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // const [tmpHistory, setTmpHistory] = useState();
  const [currentMove, setCurrentMove] = useState(0);
  const [styleOrderHistoryList, setStyleOrderHistoryList] = useState(
    "descendingOrderButton"
  );
  const currentBoardSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsFirstPlayer(!isFirstPlayer);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setIsFirstPlayer(nextMove % 2 === 0);
  }

  // function handleOrderHistory() {
  //   console.log("Hello");
  //   const temp = [...history]
  //   temp.reverse();
  //   setHistory(temp);
  // }

  const gameHistory = history.map((item, move) => {
    let description;
    if (move == currentMove) {
      description = "You are at move # " + move;
    } else if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to game start";
    }
    return {
      onHistoryClick: () => jumpTo(move),
      description,
      move,
      currentMove,
    };
  });

  console.log(history, gameHistory);
  return {
    isFirstPlayer,
    history: gameHistory,
    currentBoardSquares,
    handlePlay,
    /*onOrderHistoryClick: handleOrderHistory,*/
  };
}
