import React, { Component } from 'react';
import { boardMaker } from './boardMaker.js';
import { BoardRow } from './BoardRow.jsx';

const Board = () => {
  let board = boardMaker(8);
  return (
    <table>
      <tbody>
        {board.map((row, index) => (<tr><BoardRow row={row} index={index}/></tr>))}
      </tbody>
    </table>
  )
}

exports.Board = Board;