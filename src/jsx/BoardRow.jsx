import React from 'react';
import { boardMaker } from './boardMaker.js';

const BoardRow = (props) => {
  return (props.row.map((square, index) => <div>{square}</div>))
}

exports.BoardRow = BoardRow;