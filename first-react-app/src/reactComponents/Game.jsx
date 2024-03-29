import { useGame } from "../businessLogic/useGame.js";
import { Board } from "./Board.jsx";
import { History } from "./History.jsx";

export function Game() {
  const {
    isFirstPlayer,
    history,
    currentBoardSquares,
    handlePlay,
    onOrderHistoryClick,
    handleRestart,
  } = useGame();

  return (
    <div id="game">
      <div>
        <Board
          isFirstPlayer={isFirstPlayer}
          boardSquares={currentBoardSquares}
          onPlay={handlePlay}
          onRestartClick={handleRestart}
        />
      </div>
      <div>
        <History history={history} onOrderHistory={onOrderHistoryClick} />
      </div>
    </div>
  );
}
