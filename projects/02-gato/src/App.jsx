import { useState } from "react"
import confetti from "canvas-confetti"

import { Squere } from "./components/Squere"
import { TURNS } from "./constants.js"
import { checkWinner, checkEndGame } from "./logic/logigicGame.js"
import { WinnerModal } from "./components/winnerModal.jsx"
import { Board } from "./components/Board"
// TODO separar en carpetas 


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] =useState(TURNS.X)
  const [winner, setWinner] = useState(null) // null --> no hay ganador false --> es un empate

 
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // la función más importante
  const updateBoard = (index) => {
    // no actualizar la posición si ya esta ocupada
    if (board[index] || winner) return ''

    // actualizar el tablero con el 
    // nuevo movimiento 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    // cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return(
    <main className="board">
      <h1>El gato</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      <section className="game">
        <Board b={board} updateBoard={updateBoard}/>
      </section>

      <section className="turn">
        <Squere isSelected={ turn === TURNS.X }>{TURNS.X}</Squere>
        <Squere isSelected={ turn === TURNS.O }>{TURNS.O}</Squere>
      </section>
      
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>

  )
}
export default App