import { useEffect, useRef, useState } from 'react'

function formatValue(value, decimals) {
  if (decimals > 0) {
    return value.toFixed(decimals)
  }

  return Math.round(value).toLocaleString()
}

function useCountUp(end, { duration = 2200, decimals = 0, trigger = true } = {}) {
  const [displayValue, setDisplayValue] = useState(() => formatValue(0, decimals))
  const rafRef = useRef(0)

  useEffect(() => {
    if (!trigger) {
      return undefined
    }

    const start = performance.now()

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(formatValue(end * eased, decimals))

      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(tick)
      }
    }

    rafRef.current = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(rafRef.current)
  }, [decimals, duration, end, trigger])

  return displayValue
}

export default useCountUp
