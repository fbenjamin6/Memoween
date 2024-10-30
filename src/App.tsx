import { Card } from './components/Card'
import { PauseIcon } from './components/Icons'
import { Modal } from './components/Modal'
import { BackgroundDecoration } from './components/backgroundDecoration'
import { Timer } from './components/Timer'
import { useGame } from './hooks/useGame'
import { character } from './types/types'

function App() {
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
    <>
      <BackgroundDecoration />
      <h1 className='text-6xl font-semibold'>Mem🎃ween</h1>
      <div className='grid grid-cols-3 items-center mt-3 mb-1.5'>
        <Timer timer={timer} />

        <span className='text-lg font-medium text-center '>
          Puntaje: {score}
        </span>

        <button
          onClick={handlePause}
          className='flex ml-auto bg-neutra-950 rounded-md py-1.5 px-2 border-2 border-orange-600 hover:bg-orange-600 transition-colors duration-300 text-white'
        >
          <PauseIcon />
        </button>
      </div>
      <ul className='grid grid-cols-board gap-4 place-content-center '>
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
    </>
  )
}

export default App
