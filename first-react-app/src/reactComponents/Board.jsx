import { Square } from './Square.jsx';
import { useState } from 'react';
//import useBoard from '../businessLogic/useBoard.jsx';

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isFirstPlayer, setIsFirstPlayer] = useState(true);

    function Field ({size}) {
        const tmp = [];
        for (var i=0; i < size; i++ ) {
            let index = i;  //Muss als Middleman fungieren, sonst geht onClick nicht
            tmp.push(<Square value={squares[index]} onSquareClick={() => handleClick(index)}></Square>)
        }
        console.log(tmp);
        return (<section>{tmp}</section>);
    }

    //let {Field, sieger, setSquareValue, currentPlayer, reset} = useBoard;

    function handleClick(i) {
      const nextSquares = squares.slice();
      if(nextSquares[i] == null && calculateWinner(squares) == null) {
        if (isFirstPlayer) {
          nextSquares[i] = "X"
        } else {
          nextSquares[i] = "O"
        }
        setSquares(nextSquares);
        setIsFirstPlayer(!isFirstPlayer);
      }
    }
  
    function calculateWinner(squares) {
      const lines= [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        /* Wenn erstes Symbol auch in allen anderen Feldern einer 
         * Siegeskombination vorkommt -> Gewonnen */
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
    //Check für Statusleiste über Spielebrett
    let winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (isFirstPlayer ? "X" : "O");
    }
    

    return (
        <main>
            <header>{ status }</header>
            <Field size={9}/>
        </main>
    );
}
