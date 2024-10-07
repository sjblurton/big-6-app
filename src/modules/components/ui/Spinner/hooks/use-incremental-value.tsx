import { useCallback, useEffect, useRef, useState } from "react"

const SPEED = { slow: 500, medium: 1000, fast: 2000 } as const
export type UseIncrementalValueSpeed = keyof typeof SPEED

function useIncrementalValue(speed: UseIncrementalValueSpeed) {
    const [value, setValue] = useState<number>(0)
    const currentValueReference = useRef<number>(0)
    const timeoutReference = useRef<NodeJS.Timeout | null>(null)

    const interval = 70
    const increment = SPEED[speed] / interval

    const updateValue = useCallback(() => {
        currentValueReference.current += increment
        setValue(currentValueReference.current)
    }, [increment])

    const clearTimer = useCallback(() => {
        if (timeoutReference.current) {
            clearTimeout(timeoutReference.current)
            timeoutReference.current = null
        }
    }, [])

    const countUp = useCallback(() => {
        updateValue()
        timeoutReference.current = setTimeout(countUp, interval)
    }, [interval, updateValue])

    useEffect(() => {
        timeoutReference.current = setTimeout(countUp, interval)
        return () => {
            clearTimer()
        }
    }, [countUp, interval, clearTimer])

    return value
}

export default useIncrementalValue
