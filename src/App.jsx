import { useState } from 'react'

import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'

import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { checkWinner,newTurn,keepPlaying } from './logic/board'
import { Turn } from './components/Turn'
import { saveGame, readGameBoard, readGameTurn, deleteGame } from './logic/storage'

function App() {
 
  const [board,setBoard] = useState(()=>{
    const boardFromStorage = readGameBoard()   
    if(boardFromStorage) return boardFromStorage
    return Array(9).fill(null)
  })
  const [turn,setTurn] = useState(()=>{
    const turnFromStorage = readGameTurn() 
    if(turnFromStorage) return turnFromStorage
    return TURNS.X
  })
  const [winner,setWinner] = useState(null)   // null: no hay ganador, false: empate, si hay ganador es X u O

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    deleteGame()
  }

  const updateBoard = (index) => {
        
    if((winner === null) && !board[index]){ //si el juego no termino y el casillero esta vacio
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      saveGame('board',newBoard)
      if (checkWinner(newBoard)){ 
        setWinner(turn)
        confetti()
      }else{
        //chequeo si es empate              
        if(!keepPlaying(newBoard)){
          setWinner(false)
        }
      }
      setTurn(newTurn(turn)) //(oldState) =>(!oldState)
      saveGame('turn',  newTurn(turn)  )
    }       
  }

  return (        
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Resetear Juego</button>
      <Board 
        board={board}
        updateBoard={updateBoard}
      />
      <Turn turn={turn}/>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>                
    </main>       
  )
}
export default App






