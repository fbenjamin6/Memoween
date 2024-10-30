import { TimerIcon } from './Icons'

export function Timer({ timer }: { timer: number }) {
  return (
    <>
      <span className=' flex gap-1.5 font-medium text-lg items-center'>
        <TimerIcon /> {Math.floor(timer / 60)}:
        {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
      </span>
    </>
  )
}
