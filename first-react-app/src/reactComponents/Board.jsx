import Square from './Square.jsx';
import { useEffect, useState } from 'react';
import { useBoard } from '../businessLogic/useBoard.jsx';

//Needs css
export function Board() {
  const { handleClick, gameStatus, boardSquares } = useBoard("O");

  //JSX nur Variablen, Komponenten oder loops über Komponenten
  //Js eher keine for-loops, lieber map (filter, find etc.)
  return (
    <main>
      <header>{gameStatus()}</header>
      {Array(9).fill(null).map((item, index) => <Square key={index} value={boardSquares[index]} onSquareClick={() => handleClick(index)} /> )}
    </main>
  );
}
//prettier 