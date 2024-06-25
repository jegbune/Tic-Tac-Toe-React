import './TicTacToeGame.css'
import React, { useEffect, useState } from 'react'

function TicTacToeGame() {
    const [boards, setBoards] = useState(Array(9).fill(''))
    const [players, setPlayers] = useState('X')
    const [winner, setWinner] = useState(null)
    
        const winningLevel =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        
        const checkWinner= ()=> {
            for(const level of winningLevel) { 
                const [a, b, c] =level
               if(boards[a] && boards[c] === boards[a] && boards[b] === boards[c]) {
                       setWinner(`${boards[b]} Won!`)
                       return;
                   }
                }
                   if (boards.every(board => board !== '')) {
                    setWinner(`it's a draw!`)
                   }
        }
        
        useEffect(() => {
            checkWinner();
        },[boards])

        const handleClick = (index) =>  {
            if (winner || boards[index] !=='')return;

                setBoards((prevState) => {
                const boardValue = [...prevState]
                boardValue[index] = players;
                return boardValue
            })
            setPlayers(players ==='X' ? 'O' : 'X')
    }            
    

        const reset = () => {
            setBoards(Array(9).fill(''))
            setPlayers('X')
            setWinner(null)
        }

            

  return (
    <div className='container'>
        <h1>TicTacToe Board Game with <span>React</span></h1>
      <div className='board'>
        {
            boards.map((board, index) => 
                (
                    <div className='boxes' key={index} onClick={()=> handleClick(index)}>
                        {board}
                    </div>      
                )
            )
        }

      </div>
      <div className='result'>{winner}</div>

        <button className='btn' onClick={reset}>Reset</button>
    </div>
  )
}

export default TicTacToeGame
