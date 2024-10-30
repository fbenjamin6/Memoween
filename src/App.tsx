import { BackgroundDecoration } from './components/BackgroundDecoration'
import { Footer } from './components/Footer'
import { Board } from './components/Board'

function App() {
  return (
    <>
      <main>
        <BackgroundDecoration />
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold pt-8 lg:mb-8'>
          Mem🎃ween
        </h1>
        <Board />
      </main>

      <Footer />
    </>
  )
}

export default App
