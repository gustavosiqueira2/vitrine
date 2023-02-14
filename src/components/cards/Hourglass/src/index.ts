import { useEffect, useRef, useState } from 'react'
import moveSand from './moveSand'

import renderHourglass from './renderHourglass'

const useHourglass = (lines: number = 14) => {
  const defaultValues = {
    lines: [],
    lineStates: Array.from(
      { length: lines + 2 },
      (_, index) => index < lines / 2
    )
  }

  const [linesArray, setLinesArray] = useState<string[]>(defaultValues.lines)
  const [lineState, setLineState] = useState(defaultValues.lineStates)

  const isFirstTime = useRef(true)
  const firstIterationValue = useRef<string[]>([])
  const counter = useRef(0)
  const nextStepTimeoutReference = useRef<number>()

  useEffect(() => {
    console.log('RODOU')
    if (isFirstTime.current) {
      isFirstTime.current = false

      const array: string[] = []

      renderHourglass(lines, lineState, array)

      firstIterationValue.current = array

      setLinesArray(array)
    }

    nextStepTimeoutReference.current = setTimeout(() => {
      if (counter.current < lines) {
        const array: string[] = []

        moveSand(lineState, setLineState)

        renderHourglass(lines, lineState, array)

        counter.current = counter.current + 1

        setLinesArray(array)
      }
    }, 2000)
  }, [linesArray])

  const handleReset = () => {
    clearTimeout(nextStepTimeoutReference.current)
    setLinesArray(firstIterationValue.current)
    setLineState(defaultValues.lineStates)
    counter.current = 0
  }

  return {
    hourglass: linesArray,
    resetHourglass: handleReset
  }
}

export default useHourglass
