export function BackgroundDecoration() {
  return (
    <div className='gradient fixed top-0 left-0 w-full h-full pointer-events-none'>
      <img
        src='/spiderWeb.png'
        alt=''
        className='absolute top-0 right-0 w-64 rotate-90'
      />
      <img
        src='/spiderWeb.png'
        alt=''
        className='absolute bottom-0 left-0 w-56 -rotate-90'
      />
      <div className=''></div>
    </div>
  )
}
