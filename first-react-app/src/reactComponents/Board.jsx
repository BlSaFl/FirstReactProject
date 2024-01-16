import { Square } from './Square.jsx';
import { useState } from 'react';

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    //In diesem Anwendungsfall lieber binär entscheiden und nicht mit Strings
    //const [tag, setTag] = useState("X");
    const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  
    function handleClick(i) {
      const nextSquares = squares.slice();
      if(nextSquares[i] == null && calculateWinner(squares) == null) {
        /* Erste Lösung:
        nextSquares[i] = tag;
        if(tag=="X") {
          setTag("O");
        } else { 
          setTag("X")
        }*/
        //Zweite Lösung:
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
  


    function NewBoardRow (length, iteration) {
        const tmp = [];
        for (var i=0; i < length; i++ ) {
            let index = i+iteration*3;
            tmp.push(<Square value={squares[index]} onSquareClick={() => handleClick(index)}></Square>);
        }
        console.log(tmp);
        return (<div>{tmp}</div>);
    }

    function NewBoard ({size}) {
        const tmp = [];
        for (var i=0; i < size; i++ ) {
            tmp.push(NewBoardRow(size, i))
        }
        console.log(tmp);
        return (<>{tmp}</>);
    }

    return (
        <main>
            <header>{ status }</header>
            <section><NewBoard size={3}/></section>
        </main>
    );
  }
  
  
  /*
    
    <div className='tikTakToe'>
        <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
        </div>
        <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
        </div>
        <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
        </div>     
    </div>   
  */