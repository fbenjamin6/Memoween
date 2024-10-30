import { TimerIcon } from './Icons'

export function Timer({ timer }: { timer: number }) {
  return (
    <>
      <span className=' flex gap-1.5 font-medium text-lg items-center bg-neutral-900/90 w-min px-2 py-1.5 rounded-md'>
        <TimerIcon /> {Math.floor(timer / 60)}:
        {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
      </span>
    </>
  )
}
