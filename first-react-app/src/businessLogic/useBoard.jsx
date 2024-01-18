import { useState } from "react";

export function useBoard(initialPlayer) {
    /*  Implementierung der Board-Logik
        - Verwalte Generierung der Squares
        - Sag wer der Gewinner ist
        - Funktion zum Setzen der Squarebelegung
        - Wer ist aktueller Spieler
        - Funktion zum zurücksetzen
    */
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [isFirstPlayer, setIsFirstPlayer] = useState(true);

    function handleClick(i) {
        const nextSquares = boardSquares.slice();
        if (nextSquares[i] == null && calculateWinner(boardSquares) == null) {
            if (isFirstPlayer) {
                nextSquares[i] = "X"
            } else {
                nextSquares[i] = "O"
            }
            setBoardSquares(nextSquares);
            setIsFirstPlayer(!isFirstPlayer);
        }
    }

    const calculateWinner = (boardSquares) => {
        const lines = [
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
            if (boardSquares[a] && boardSquares[a] === boardSquares[b] && boardSquares[a] === boardSquares[c]) {
                return boardSquares[a];
            }
        }
        return null;
    }
    //Check für Statusanzeige über dem Spielebrett
    let status;
    let winner = calculateWinner(boardSquares);
    //In Variable ausgeben, nicht Funktion
    const gameStatus = () => {
        if (calculateWinner(boardSquares)) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (isFirstPlayer ? "X" : "O");
        }
        return status;
    }
        

    return ({ handleClick, gameStatus, boardSquares});
}