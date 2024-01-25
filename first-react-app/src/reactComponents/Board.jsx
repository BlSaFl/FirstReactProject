import Square from "./Square.jsx";
import { useState, useEffect } from "react";
import { useBoard } from "../businessLogic/useBoard.js";

export function Board({ isFirstPlayer, boardSquares, onPlay }) {
  const { handleClick, boardGameStatus, status } =
    useBoard({isFirstPlayer, boardSquares, onPlay});

  //Aktualisiere Spielstatus, wenn geklickt
  //In dem Fall KEIN Effect Hook
  useEffect(() => {
    boardGameStatus();
  }, [handleClick]);

  //JSX nur Variablen, Komponenten oder loops über Komponenten
  //Js eher keine for-loops, lieber map (filter, find etc.)
  return (
    <main>
      <header>{status}</header>
      <section>
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
      <section id="gameOver"></section>
    </main>
  );
}
//prettier
