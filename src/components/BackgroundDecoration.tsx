export function BackgroundDecoration() {
  return (
    <>
      <img
        src='/spiderWeb.png'
        alt=''
        className='absolute top-0 left-0 w-28 sm:w-48 lg:w-64  -z-50'
      />
      <img
        src='/spiderWeb.png'
        alt=''
        className='absolute bottom-0 right-0 w-36 sm:w-48 lg:w-56 rotate-180 -z-50'
      />
      <div className='gradient fixed top-0 left-0 w-full h-full pointer-events-none'></div>
    </>
  )
}
