import { act, renderHook } from "@testing-library/react"

import useIncrementalValue from "./use-incremental-value"

const SPEED = { slow: 500, medium: 1000, fast: 2000 } as const

const INTERVAL = 70

describe("useIncrementalValue", () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })

    it.each(Object.keys(SPEED) as (keyof typeof SPEED)[])(
        "should increment value correctly for speed %s",
        (speed) => {
            const { result } = renderHook(() => useIncrementalValue(speed))

            expect(result.current).toBe(0)

            act(() => {
                jest.advanceTimersByTime(INTERVAL)
            })

            expect(result.current).toBeCloseTo(SPEED[speed] / INTERVAL)

            act(() => {
                jest.advanceTimersByTime(INTERVAL)
            })

            expect(result.current).toBeCloseTo((SPEED[speed] / INTERVAL) * 2)
        }
    )

    it("should stop counting when component unmounts", () => {
        const timeoutSpy = jest.spyOn(global, "clearTimeout")
        const { result, unmount } = renderHook(() =>
            useIncrementalValue("fast")
        )

        expect(result.current).toBe(0)

        act(() => {
            jest.advanceTimersByTime(INTERVAL * 2)
        })

        expect(result.current).toBeCloseTo((SPEED.fast / INTERVAL) * 2)

        act(() => {
            unmount()
        })

        jest.runOnlyPendingTimers()

        expect(timeoutSpy).toHaveBeenCalled()
    })
})
