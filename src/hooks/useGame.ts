import { useState, useEffect } from 'react'
import { character } from '../types/types'
import { characters } from '../characters'

export function useGame() {
  const [board, setBoard] = useState<character[]>(() => shuffleCharacters())
  const [selected, setSelected] = useState<character[]>([])
  const [guessed, setGuessed] = useState<character[]>([])
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(0)
  const [pause, setPause] = useState(false)
  const [won, setWon] = useState(false)

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].type === selected[1].type) {
        const sound = new Audio(selected[0].sound)
        setGuessed((prev) => [...prev, selected[0], selected[1]])
        setScore((score) => score + 60)
        sound.play()
      } else {
        setScore((score) => score - 10)
      }

      setTimeout(() => {
        setSelected([])
      }, 800)
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === board.length) {
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
    setScore(0)
    setTimer(0)
    setWon(false)
    setPause(false)
  }

  function handlePause() {
    setPause(!pause)
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

  return {
    won,
    timer,
    score,
    handlePause,
    handleReset,
    guessed,
    selected,
    board,
    pause,
    handleSelect,
  }
}
