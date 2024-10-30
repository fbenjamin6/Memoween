import { CloseIcon, ResetIcon } from './Icons'
import confetti from 'canvas-confetti'
import { useConfetti } from '../hooks/useConfetti'

type ModalProps = {
  pause: boolean
  won: boolean
  score: number
  timer: number
  handlePause: () => void
  handleReset: () => void
}

export function Modal({
  pause,
  won,
  score,
  timer,
  handlePause,
  handleReset,
}: ModalProps) {
  useConfetti(won)

  return (
    <div
      className={`fixed flex items-center justify-center top-0 left-0 w-full h-full bg-neutral-800/50 transition-opacity duration-200 ${
        pause || won ? 'opacity-100 ' : 'opacity-0 pointer-events-none'
      }`}
    >
      {pause && (
        <div className='bg-neutral-900 relative w-[200px] aspect-square rounded-xl flex flex-col justify-center items-center gap-6'>
          <button
            onClick={handlePause}
            className='absolute  top-2.5 right-2.5 hover:scale-110 transition-transform duration-300'
          >
            <CloseIcon />
          </button>
          <h3 className='font-medium text-3xl'>Pausa</h3>
          <button
            onClick={handleReset}
            className='flex items-center gap-2 bg-neutral-950 rounded-md py-2 px-3 font-medium border-2 border-orange-600 hover:bg-orange-600  transition-colors duration-300'
          >
            <ResetIcon /> Reiniciar
          </button>
        </div>
      )}
      {won && (
        <div className='bg-neutral-900 relative w-[260px] aspect-square rounded-xl flex flex-col justify-center items-center gap-6'>
          <h4 className='font-semibold text-3xl'>¡Has ganado!</h4>
          <div className='flex flex-col items-center gap-1.5'>
            <span className='text-lg'>Puntaje: {score}</span>
            <span className='flex items-center text-lg'>
              Tiempo de juego: {Math.floor(timer / 60)}:
              {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
            </span>
          </div>
          <button
            onClick={handleReset}
            className='flex items-center gap-2 bg-orange-600 rounded-md py-2 px-3 font-medium border border-transparent hover:border-white  transition-colors duration-300'
          >
            <ResetIcon /> Reiniciar
          </button>
        </div>
      )}
    </div>
  )
}
