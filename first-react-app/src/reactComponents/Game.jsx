import { useState } from "react";
import { Board } from "./Board.jsx";
import { useGame } from "../businessLogic/useGame.jsx";

export function Game() {
  const { isFirstPlayer, history, currentBoardSquares, handlePlay, moves } = useGame();

  return (
    <div id="game">
      <div>
        <Board isFirstPlayer={isFirstPlayer} boardSquares={currentBoardSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
