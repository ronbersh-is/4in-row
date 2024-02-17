import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [board, setBoard] = useState<any[][]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<string>("");
  const row = 6;
  const col = 7;

  useEffect(() => {
    const random = Math.floor(Math.random() * 100);
    if (random % 2 === 0) {
      setCurrentPlayer("green");
    } else {
      setCurrentPlayer("red");
    }
    initBoard();
  }, []);

  const initBoard = () => {
    const intialBoard = [];
    for (let i = 0; i < row; i++) {
      const rowArray = [];
      for (let j = 0; j < col; j++) {
        rowArray.push("-1");
      }
      intialBoard.push(rowArray);
    }
    setBoard(intialBoard);
  };

  const onAddDisc = (rowIndex: number, colIndex: number) => {
    console.log("add Disc row", rowIndex, colIndex);
    console.log("add Disc col", colIndex);
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      for (let i = newBoard.length - 1; i >= 0; i--) {
        if (newBoard[i][colIndex] === "-1") {
          newBoard[i][colIndex] = currentPlayer;
          break;
        }
      }

      console.log("after update", newBoard[colIndex]);

      return newBoard;
    });
    setCurrentPlayer(currentPlayer === "green" ? "red" : "green");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Game
          currentPlayer={currentPlayer}
          board={board}
          addDisc={onAddDisc}
        ></Game>
      </header>
    </div>
  );
}

export default App;
