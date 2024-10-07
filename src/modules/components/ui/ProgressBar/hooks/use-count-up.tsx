"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type Properties = {
    start: number
    end: number
    duration?: number
}

function useCountUp({ end, start, duration = 2000 }: Properties) {
    const [value, setValue] = useState<number>(start)
    const currentValueReference = useRef<number>(start)
    const timeoutReference = useRef<NodeJS.Timeout | null>(null)
    const isInitRender = useRef(true)

    const interval = 70
    const steps = duration / interval
    const increment = (end - start) / steps

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
        if (start === end) {
            setValue(end)
            return
        }
        if (isInitRender.current) {
            isInitRender.current = false
            timeoutReference.current = setTimeout(countUp, interval)
            return
        }
        updateValue()

        const hasEnded =
            (increment > 0 && currentValueReference.current >= end) ||
            (increment < 0 && currentValueReference.current <= end)

        if (hasEnded) {
            setValue(end)
            clearTimer()
            return
        }

        timeoutReference.current = setTimeout(countUp, interval)
    }, [start, end, increment, interval, updateValue, clearTimer])

    useEffect(() => {
        timeoutReference.current = setTimeout(countUp, interval)
        return () => {
            clearTimer()
        }
    }, [countUp, interval, clearTimer])

    return Math.round(value)
}

export default useCountUp
