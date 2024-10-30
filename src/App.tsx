import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { characters } from './characters'
import { character } from './types/types'

function App() {
  const [board, setBoard] = useState<character[]>(() => shuffleCharacters())
  const [selected, setSelected] = useState<character[]>([])
  const [guessed, setGuessed] = useState<character[]>([])
  const [points, setPoints] = useState(0)
  const [timer, setTimer] = useState(0)
  const [pause, setPause] = useState(false)
  const [won, setWon] = useState(false)

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].type === selected[1].type) {
        const sound = new Audio(selected[0].sound)
        setGuessed((prev) => [...prev, selected[0], selected[1]])
        setPoints((points) => points + 60)
        sound.play()
      } else {
        setPoints((points) => points - 10)
      }

      setTimeout(() => {
        setSelected([])
      }, 800)
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === board.length) {
      alert('you win')
      setWon(true)
    }
  }, [guessed])

  useEffect(() => {
    if (pause || won) return
    const intervalID = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)

    return () => clearInterval(intervalID)
  }, [pause, won])

  function handleSelect(character: character) {
    if (
      selected.includes(character) ||
      selected.length === 2 ||
      guessed.includes(character)
    )
      return
    setSelected((prev) => [...prev, character])
  }

  function handleReset() {
    setBoard(() => shuffleCharacters())
    setSelected([])
    setGuessed([])
    setPoints(0)
    setTimer(0)
    setWon(false)
    setPause(false)
  }

  function shuffleCharacters() {
    const charactersMapped = characters
      .flatMap((character: character) => [
        { ...character, couple: 'A' },
        { ...character, couple: 'B' },
      ])
      .sort(() => Math.random() - 0.5)
    return charactersMapped
  }

  return (
    <>
      <h1 className='text-5xl'>Mem🎃Ween</h1>
      <h2>{points}</h2>
      <h2>{timer}</h2>
      <button onClick={() => setPause(true)}>pausar</button>
      <ul className='grid grid-cols-board gap-5 place-content-center mt-10'>
        {board.map((character: character) => {
          const { type, couple, url, sound } = character

          return (
            <Card
              key={type + couple}
              url={url}
              onClick={() => handleSelect(character)}
              flipped={
                selected.includes(character) || guessed.includes(character)
              }
            />
          )
        })}
      </ul>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-neutral-800/50  ${
          pause ? 'opacity-100 ' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className=''>
          <button onClick={() => setPause(false)}>X</button>
          <h4>Pausa</h4>
          <button onClick={handleReset}>Reiniciar</button>
        </div>
      </div>
    </>
  )
}

export default App
