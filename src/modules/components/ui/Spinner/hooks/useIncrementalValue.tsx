import { useCallback, useEffect, useRef, useState } from "react"

const SPEED = { slow: 500, medium: 1000, fast: 2000 } as const
export type UseIncrementalValueSpeed = keyof typeof SPEED

function useIncrementalValue(speed: UseIncrementalValueSpeed) {
    const [value, setValue] = useState<number>(0)
    const currentValueRef = useRef<number>(0)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const interval = 70
    const increment = SPEED[speed] / interval

    const updateValue = useCallback(() => {
        currentValueRef.current += increment
        setValue(currentValueRef.current)
    }, [increment])

    const clearTimer = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
    }, [])

    const countUp = useCallback(() => {
        updateValue()
        timeoutRef.current = setTimeout(countUp, interval)
    }, [interval, updateValue])

    useEffect(() => {
        timeoutRef.current = setTimeout(countUp, interval)
        return () => {
            clearTimer()
        }
    }, [countUp, interval, clearTimer])

    return value
}

export default useIncrementalValue
