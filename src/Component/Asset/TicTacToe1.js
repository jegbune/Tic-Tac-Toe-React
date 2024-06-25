import './TicTacToe1.css'
import React, { useState } from 'react';

function TicTacToe1() {
  const [boards, setBoards] = useState(Array(9).fill(''));
  const [input, setInput] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner) return;
    if (boards[index] !== '') return;

    setBoards((prevState) => {
      const newBoard = [...prevState];
      newBoard[index] = input;
      return newBoard;
    });

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      if (
        boards[combo[0]] === input &&
        boards[combo[1]] === input &&
        boards[combo[2]] === input
      ) 
      {
        setWinner(`${input} wins!`);
        break;
      }
    }
    if(boards.every((square) => square !== '' ))
      setWinner(`it's a Draw!`)
    setInput(input === 'X' ? 'O' : 'X');
  };

  const handleReset = () => {
    setBoards(Array(9).fill(''));
    setWinner(null);
    setInput('X');

  };

  return (
    <div className='container'>
      <div>
        <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
        <div className='board'>
          <div className='boxes' data-index='0' onClick={() => handleClick(0)}>
            {boards[0]}
          </div>
          <div className='boxes' data-index='1' onClick={() => handleClick(1)}>
            {boards[1]}
          </div>
          <div className='boxes' data-index='2' onClick={() => handleClick(2)}>
            {boards[2]}
          </div>
          <div className='boxes' data-index='3' onClick={() => handleClick(3)}>
            {boards[3]}
          </div>
          <div className='boxes' data-index='4' onClick={() => handleClick(4)}>
            {boards[4]}
          </div>
          <div className='boxes' data-index='5' onClick={() => handleClick(5)}>
            {boards[5]}
          </div>
          <div className='boxes' data-index='6' onClick={() => handleClick(6)}>
            {boards[6]}
          </div>
          <div className='boxes' data-index='7' onClick={() => handleClick(7)}>
            {boards[7]}
          </div>
          <div className='boxes' data-index='8' onClick={() => handleClick(8)}>
            {boards[8]}
          </div>
        </div>
        {winner && (
          <div className='winner'>
            <h2>{winner}</h2>
          </div>
        )}
        <button className='reset' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe1;
