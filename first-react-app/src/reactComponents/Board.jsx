import Square from "./Square.jsx";
import { useState, useEffect } from "react";
import { useBoard } from "../businessLogic/useBoard.js";

export function Board({ isFirstPlayer, boardSquares, onPlay, onRestartClick }) {
  const { handleClick, status, boardGameStatus, winner } = useBoard({
    isFirstPlayer,
    boardSquares,
    onPlay,
  });
  useEffect(() => {
    boardGameStatus();
  }, [handleClick]);
  //JSX nur Variablen, Komponenten oder loops über Komponenten
  //Js eher keine for-loops, lieber map (filter, find etc.)
  return (
    <main>
      <header>{status}</header>
      <section id="board">
        {Array(9)
          .fill(null)
          .map((item, index) => (
            <Square
              key={index}
              value={boardSquares[index]}
              onSquareClick={() => handleClick(index)}
            />
          ))}
      </section>
      <section
        id="gameOver"
        className={
          winner == null && status !== "Game Over" ? "collapsed" : "visible"
        }
      >
        <h1>Game Over</h1>
        <p>{status !== "Game Over" ? status : "No winners here"}</p>
        <button onClick={onRestartClick}>Restart Game</button>
      </section>
    </main>
  );
}
//prettier
