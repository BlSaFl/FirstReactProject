import { useState, useMemo } from "react";

export function useGame() {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentBoardSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsFirstPlayer(!isFirstPlayer);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setIsFirstPlayer(nextMove % 2 === 0);
  }

  function onOrderHistoryClick() {
    setIsSortedAsc(!isSortedAsc);
  }

  function getSortedHistory() {
    const unsortedHistory = history.map((item, move) => {
      let description;
      if (move == currentMove) {
        description = "You are at move # " + move;
      } else if (move > 0) {
        description = "Go to move # " + move;
      } else {
        description = "Go to game start";
      }
      return {
        onHistoryClick: () => jumpTo(move),
        description,
        move,
        currentMove,
      };
    });
    return isSortedAsc ? unsortedHistory : unsortedHistory.reverse();
  }

  return {
    isFirstPlayer,
    history: getSortedHistory(),
    currentBoardSquares,
    handlePlay,
    onOrderHistoryClick,
  };
}

/*
Bsp useMemo als hook zum re-rendern
  const sortedHistory = useMemo(() => {
    const unsortedHistory = history.map((item, move) => {
      let description;
      if (move == currentMove) {
        description = "You are at move # " + move;
      } else if (move > 0) {
        description = "Go to move # " + move;
      } else {
        description = "Go to game start";
      }
      return {
        onHistoryClick: () => jumpTo(move),
        description,
        move,
        currentMove,
      };
    });
    return isSortedAsc ? unsortedHistory : unsortedHistory.reverse();
  }, [history, isSortedAsc, currentMove]);
  */
/*
  Bsp Pure Function:
  const gameHistory = history.map((item, move) => {
    let description;
    if (move == currentMove) {
      description = "You are at move # " + move;
    } else if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to game start";
    }
    return {
      onHistoryClick: () => jumpTo(move),
      description,
      move,
      currentMove,
    };
  });
  */
/* 
  Bsp Currying Funktion:
  const gewichtsfeldAbhaengigeMasse = (gewichtsfeld) => {
    return (masse) => gewichtsfeld * masse;
  };

  const crewGewichte = [80, 60, 75, 90, 100, 55, 65, 75, 80, 90];

  const planetenGewichtsfelder = [9.81, 3.711, 24.79, 8.87, 8.87, 3.71];

  const gewichtEinesMitgliedsAufPlanete = crewGewichte.map((gewicht) => {
    const berechneFürPlaneten = gewichtsfeldAbhaengigeMasse(gewicht);
    return planetenGewichtsfelder.map((planetenbeschleunigung) =>
      berechneFürPlaneten(planetenbeschleunigung)
    );
  });
  console.log(sumWith12(3));
  */
/* Bsp Flags zum speichern der Sortierrichtung (Re-rendern würde Sortierung sonst
    rückgängig machen)
    const unsortedHistory = history.map((item, move) => {
      let description;
      if (move == currentMove) {
        description = "You are at move # " + move;
      } else if (move > 0) {
        description = "Go to move # " + move;
      } else {
        description = "Go to game start";
      }
      return {
        onHistoryClick: () => jumpTo(move),
        description,
        move,
        currentMove,
      };
    });

    const sortedHistory = isSortedAsc
      ? unsortedHistory
      : unsortedHistory.reverse();
  */
