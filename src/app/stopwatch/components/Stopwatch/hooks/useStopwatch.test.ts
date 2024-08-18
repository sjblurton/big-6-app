import { renderHook } from "@testing-library/react"
import { act } from "react"
import { TIME_MILLISECONDS } from "@/modules/time/constants"
import useStopwatch from "./useStopwatch"

jest.useFakeTimers()

describe("useTimer", () => {
    it("initial state should have 00:00:00 as time and isRunning as false", () => {
        const { result } = renderHook(() => useStopwatch())

        expect(result.current.minutes).toBe("00")
        expect(result.current.seconds).toBe("00")
        expect(result.current.milliseconds).toBe("00")
        expect(result.current.isRunning).toBe(false)
    })

    it("should start the timer when startAndStop is called and update time", () => {
        const { result } = renderHook(() => useStopwatch())

        act(() => {
            result.current.startAndStop()
        })

        expect(result.current.isRunning).toBe(true)

        act(() => {
            jest.advanceTimersByTime(TIME_MILLISECONDS.ONE_SECOND)
        })

        expect(result.current.minutes).toBe("00")
        expect(result.current.seconds).toBe("01")
        expect(result.current.milliseconds).toBe("00")
    })

    it("should stop the timer when startAndStop is called again", () => {
        const { result } = renderHook(() => useStopwatch())

        act(() => {
            result.current.startAndStop()
        })

        expect(result.current.isRunning).toBe(true)

        act(() => {
            jest.advanceTimersByTime(TIME_MILLISECONDS.ONE_SECOND)
        })

        act(() => {
            result.current.startAndStop()
        })

        expect(result.current.isRunning).toBe(false)

        act(() => {
            jest.advanceTimersByTime(TIME_MILLISECONDS.ONE_SECOND)
        })

        expect(result.current.minutes).toBe("00")
        expect(result.current.seconds).toBe("01")
        expect(result.current.milliseconds).toBe("00")
    })

    it("should display double digits for minutes, seconds, and milliseconds", () => {
        const { result } = renderHook(() => useStopwatch())

        act(() => {
            result.current.startAndStop()
        })

        act(() => {
            jest.advanceTimersByTime(
                TIME_MILLISECONDS.ONE_MINUTE * 12 +
                    TIME_MILLISECONDS.ONE_SECOND * 32 +
                    TIME_MILLISECONDS.ONE_SECOND * 0.5
            )
        })

        expect(result.current.minutes).toBe("12")
        expect(result.current.seconds).toBe("32")
        expect(result.current.milliseconds).toBe("50")
    })

    it("should reset the timer when reset is called", () => {
        const { result } = renderHook(() => useStopwatch())

        act(() => {
            result.current.startAndStop()
        })

        act(() => {
            jest.advanceTimersByTime(TIME_MILLISECONDS.ONE_SECOND)
        })

        expect(result.current.seconds).toBe("01")

        act(() => {
            result.current.reset()
        })

        expect(result.current.isRunning).toBe(false)
        expect(result.current.minutes).toBe("00")
        expect(result.current.seconds).toBe("00")
        expect(result.current.milliseconds).toBe("00")
    })
})
