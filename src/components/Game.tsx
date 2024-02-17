import "./game.css";
import React, { useEffect, useState } from "react";

interface GameProps {
  currentPlayer: string;
  board: any[][];
  addDisc: (rowIndex: number, colIndex: number) => void;
}

const Game: React.FC<GameProps> = (props) => {
  const getColor = (value: any) => {
    if (value === "-1") {
      return "empty";
    }
    return value;
  };
  const itemClicked = (rowIndex: number, colIndex: number) => {
    props.addDisc(rowIndex, colIndex);
  };

  return (
    <div className="game-section">
      <h1>Game 4 in Row in React</h1>
      <h2>Turn Player - {props.currentPlayer} </h2>
      <div className="board-section">
        {props.board.length <= 0
          ? "loading Board..."
          : props.board.map((row, rowIndex) => (
              <div className="rowItem" key={rowIndex}>
                {row.map((col, colIndex) => (
                  <div
                    className={`colItem ${getColor(col)}`}
                    key={colIndex}
                    onClick={() => itemClicked(rowIndex, colIndex)}
                  ></div>
                ))}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Game;
