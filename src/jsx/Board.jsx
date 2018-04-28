import React, { Component } from 'react';
import { boardMaker } from './boardMaker.js';
import { BoardRow } from './BoardRow.jsx';

const Board = () => {
  let board = boardMaker(8);
  return (
    <div>
      {board.map((row, index) => (<BoardRow row={row}/>))}
    </div>
  )
}

exports.Board = Board;