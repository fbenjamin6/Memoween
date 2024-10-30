import { useEffect } from 'react'
import confetti from 'canvas-confetti'
export function useConfetti(won) {
  useEffect(() => {
    if (won) {
      const duration = 4 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange({ min, max }: { min: number; max: number }) {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        confetti({
          ...defaults,
          particleCount,
          origin: {
            x: randomInRange({ min: 0.1, max: 0.3 }),
            y: Math.random() - 0.2,
          },
        })
        confetti({
          ...defaults,
          particleCount,
          origin: {
            x: randomInRange({ min: 0.7, max: 0.9 }),
            y: Math.random() - 0.2,
          },
        })
      }, 250)

      return () => clearInterval(interval)
    }
  }, [won])

  return
}
