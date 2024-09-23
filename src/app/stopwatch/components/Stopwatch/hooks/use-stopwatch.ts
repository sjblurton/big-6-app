"use client"

import { useEffect, useState } from "react"

function useStopwatch() {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let intervalId: NodeJS.Timeout
        if (isRunning) {
            intervalId = setInterval(
                () => setTime((prevTime) => prevTime + 1),
                10
            )
        }
        return () => clearInterval(intervalId)
    }, [isRunning])

    const minutes = Math.floor((time % 360000) / 6000)
        .toString()
        .padStart(2, "0")

    const seconds = Math.floor((time % 6000) / 100)
        .toString()
        .padStart(2, "0")

    const milliseconds = (time % 100)
        .toString()
        .padStart(2, "0")
        .toString()
        .padStart(2, "0")

    const startAndStop = () => {
        setIsRunning(!isRunning)
    }

    const reset = () => {
        setIsRunning(false)
        setTime(0)
    }

    return { minutes, seconds, milliseconds, startAndStop, reset, isRunning }
}

export default useStopwatch
