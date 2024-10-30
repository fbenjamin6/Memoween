export function Card({
  url,
  flipped,
  onClick,
}: {
  url: string
  flipped: boolean
  onClick: () => void
}) {
  return (
    <li
      onClick={onClick}
      className={`card relative aspect-square w-full h-full transition-transform duration-500 rounded-xl  border-[8px] border-white bg-white  ${
        flipped ? 'flipped' : ''
      }`}
    >
      <div className='front absolute w-full h-full '>
        <img src={url} alt='' className='rounded-lg' />
      </div>
      <div className='back absolute w-full h-full '>
        <img src='/backCard.png' alt='' className='rounded-lg' />
      </div>
    </li>
  )
}

{
  /* <li
      onClick={() => setSelected(!selected)}
      className='w-full aspect-[1:1] h-full '
    >
      <div
        className={`card relative w-full h-full transition-transform duration-500 rounded-xl  border-[8px] border-white bg-white  ${
          selected ? 'flipped' : ''
        }`}
      >
        <div className='front absolute w-full h-full '>
          <img src={url} alt='' className='rounded-lg' />
        </div>
        <div className='back absolute w-full h-full '>
          <img src='/backCard.png' alt='' className='rounded-lg' />
        </div>
      </div>
    </li> */
}
