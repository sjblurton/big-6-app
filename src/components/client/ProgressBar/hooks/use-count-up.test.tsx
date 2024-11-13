import { act, renderHook } from "@testing-library/react"

import useCountUp from "./use-count-up"

describe("useCountUp", () => {
    const properties = {
        start: 0,
        end: 100,
        duration: 1000,
    }

    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it("should start counting at the start prop", () => {
        const { result } = renderHook(() => useCountUp(properties))
        expect(result.current).toBe(properties.start)
    })

    it("should move the value towards the end prop after each interval", () => {
        const { result } = renderHook(() => useCountUp(properties))

        act(() => {
            jest.advanceTimersByTime(500)
        })

        expect(
            result.current < properties.end && result.current > properties.start
        ).toBeTruthy()
    })

    it("should stop counting when the end prop is reached", () => {
        const { result } = renderHook(() => useCountUp(properties))

        act(() => {
            jest.advanceTimersByTime(properties.duration * 100)
        })

        expect(result.current).toBe(properties.end)
    })

    it("should clear the timer when the component is unmounted", () => {
        const timeoutSpy = jest.spyOn(global, "clearTimeout")
        const { unmount } = renderHook(() => useCountUp(properties))

        act(() => {
            unmount()
        })

        expect(timeoutSpy).toHaveBeenCalled()
    })

    it("should handle if start is greater than end", () => {
        const { result } = renderHook(() =>
            useCountUp({ ...properties, start: 100, end: 0 })
        )

        act(() => {
            jest.advanceTimersByTime(properties.duration * 100)
        })

        expect(result.current).toBe(0)
    })
})
