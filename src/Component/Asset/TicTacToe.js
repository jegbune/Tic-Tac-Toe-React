// import './TicTacToe.css'
 import React, { useEffect, useState } from 'react'
 
 function TicTacToe() {
  const [boards, setBoards] = useState(Array(9).fill(''));
  const [input, setInput] = useState('X')
  const [winner, setWinner] = useState(null)




  const handleClick =(index) => {
    if(winner) return
    if(boards[index] !== '') return
    setBoards((prevState)=> {
      const newBoard = [...prevState] 
      newBoard[index] = input;
      return newBoard
    })
    setInput(input === 'X' ? 'O' : 'X')
    
    }

    const winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    const checkWinner = () => {
      for(const combos of winningCombos)
     { if (
        boards[combos[0]] && boards[combos[0]] === boards[combos[1]] &&
        boards[combos[0]] === boards[combos[2]]) {
        setWinner(boards[combos[2]]);
        break;
      }}

    }

    useEffect(()=> {
      checkWinner() 
    }, [boards])

    const handleReset = () => {
      setWinner(null);
      setInput('X');
      setBoards(Array(9).fill(''))
    }

    return (
     <div className='container'>
      <div>
      <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
         <div className='board'>
          <div className='row1'>
            <div className='boxes' data-index ='0' onClick={() => handleClick(0)}>{boards[0]}</div>
            <div className='boxes' data-index ='1' onClick={() => handleClick(1)}>{boards[1]}</div>
            <div className='boxes' data-index ='2' onClick={() => handleClick(2)}>{boards[2]}</div>
          </div>
          <div className='row2'>
            <div className='boxes' data-index ='3' onClick={() => handleClick(3)}>{boards[3]}</div>
            <div className='boxes' data-index ='4' onClick={() => handleClick(4)}>{boards[4]}</div>
            <div className='boxes' data-index ='5' onClick={() => handleClick(5)}>{boards[5]}</div>
          </div>
          <div className='row3'>
            <div className='boxes' data-index ='6' onClick={() => handleClick(6)}>{boards[6]}</div>
            <div className='boxes' data-index ='7' onClick={() => handleClick(7)}>{boards[7]}</div>
            <div className='boxes' data-index ='8' onClick={() => handleClick(8)}>{boards[8]}</div>
          </div>
         </div>

         {winner && (
          <div className='winner'>
            <h2>{winner} wins!</h2>
            </div>
         )}
         <button className='reset' onClick={handleReset}>Reset</button>  
      </div>
     </div>
   )
 }
 
 export default TicTacToe
 