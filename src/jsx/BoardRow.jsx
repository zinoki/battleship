import React from 'react';
import { boardMaker } from './boardMaker.js';

const BoardRow = ({ row, index }) => {
  return (row.map((square, sqIndex) => <td>{square}</td>))
}

exports.BoardRow = BoardRow;