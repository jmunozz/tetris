import React from "react";
import Row from "./row.js";
import Alert from "./alert.js";
import { drawPiece, togglePlay } from "../redux/actions.js";
import { drop } from "../helpers.js";
import { keys } from "../constants.js";

const Grid = ({
  grid,
  currentPiece,
  isPlaying,
  movePieceLeft,
  movePieceRight,
  rotatePiece
}) => {
  const gridStyle = {
    position: "relative",
    textAlign: "center"
  };

  const move = e => {
    switch (e.keyCode) {
      case keys.LEFT:
        movePieceLeft();
      case keys.RIGHT:
        movePieceRight();
      case keys.TOP:
        rotatePiece();
    }
  };

  return (
    <div style={gridStyle} onKeyDown={move} tabIndex="0">
      {grid.map((e, i) => {
        return <Row key={i} row={e} />;
      })}
    </div>
  );
};

export default Grid;
