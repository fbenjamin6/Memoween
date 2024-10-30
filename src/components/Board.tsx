import { Card } from './Card'
import { PauseIcon } from './Icons'
import { Modal } from './Modal'
import { Timer } from './Timer'
import { useGame } from '../hooks/useGame'
import { character } from '../types/types'

export function Board() {
  const {
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
  } = useGame()
  return (
    <section className='max-w-[950px] mx-auto max-lg:p-5'>
      <div className='grid grid-cols-3 items-center mt-3 mb-1.5'>
        <Timer timer={timer} />

        <span className='text-lg font-medium text-center bg-neutral-900/90 w-max m-auto px-3 py-1.5 rounded-md'>
          Puntaje: {score}
        </span>

        <button
          onClick={handlePause}
          className='flex ml-auto bg-neutra-950 rounded-md py-1.5 px-2 border-2 border-orange-600 hover:bg-orange-600 transition-colors duration-300 text-white'
        >
          <PauseIcon />
        </button>
      </div>
      <ul className='grid grid-cols-mobileBoard sm:grid-cols-board gap-2 lg:gap-3 place-content-center '>
        {board.map((character: character) => {
          const { type, couple, url } = character

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

      <Modal
        won={won}
        pause={pause}
        score={score}
        timer={timer}
        handlePause={handlePause}
        handleReset={handleReset}
      />
    </section>
  )
}
