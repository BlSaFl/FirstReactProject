import { useState } from "react";
import { History } from './History.jsx';
import { Board } from "./Board.jsx";
import { useGame } from "../businessLogic/useGame.js";

export function Game() {
  const { isFirstPlayer, history, currentBoardSquares, handlePlay, onOrderHistoryClick} = useGame();

  return (
    <div id="game">
      <div>
        <Board isFirstPlayer={isFirstPlayer} boardSquares={currentBoardSquares} onPlay={handlePlay} />
      </div>
      <div>
        <History history={history} /*onOrderHistoryClick={ onOrderHistoryClick }*//>
      </div>
    </div>
  );
}
