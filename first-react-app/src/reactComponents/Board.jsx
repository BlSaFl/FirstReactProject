import Square from "./Square.jsx";
import { useState, useEffect } from "react";
import { useBoard } from "../businessLogic/useBoard.js";

export function Board({ isFirstPlayer, boardSquares, onPlay }) {
  const { handleClick, status, boardGameStatus } =
    useBoard({isFirstPlayer, boardSquares, onPlay});
  //console.log("isX in Board? " + isFirstPlayer);
  //Aktualisiere Spielstatus, wenn geklickt
  //In dem Fall KEIN Effect Hook
  //Gerade noch quickfix für verspäteten Status Update. Rendert Status zweimal!
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
