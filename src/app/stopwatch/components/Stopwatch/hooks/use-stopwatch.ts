"use client"

import { useEffect, useState } from "react"

import TimeFormatter from "@/modules/time/TimeFormatter"

function useStopwatch() {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let intervalId: NodeJS.Timeout
        if (isRunning) {
            intervalId = setInterval(
                () => setTime((previousTime) => previousTime + 1),
                10
            )
        }
        return () => clearInterval(intervalId)
    }, [isRunning])

    const startAndStop = () => {
        setIsRunning(!isRunning)
    }

    const reset = () => {
        setIsRunning(false)
        setTime(0)
    }

    return {
        minutes: TimeFormatter.getMinutes(time),
        seconds: TimeFormatter.getSeconds(time),
        milliseconds: TimeFormatter.getMilliseconds(time),
        startAndStop,
        reset,
        isRunning,
    }
}

export default useStopwatch
