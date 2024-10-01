import { act, fireEvent, render, screen } from "@testing-library/react"

import { TIME_MILLISECONDS } from "@/modules/time/constants"

import Stopwatch from "./Stopwatch"

jest.useFakeTimers()

describe("StopWatch Component", () => {
    it("renders the initial stopwatch state correctly", () => {
        render(<Stopwatch />)

        expect(screen.getByText("00 : 00 : 00")).toBeInTheDocument()
        expect(
            screen.getByText("Start, pause, and reset the timer below.")
        ).toBeInTheDocument()
        expect(
            screen.getByRole("button", { name: /reset/i })
        ).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /go/i })).toBeInTheDocument()
    })

    it("starts and stops the timer when the start/stop button is clicked", () => {
        render(<Stopwatch />)

        const startStopButton = screen.getByRole("button", { name: /go/i })

        fireEvent.click(startStopButton)
        act(() => {
            jest.advanceTimersByTime(TIME_MILLISECONDS.ONE_SECOND)
        })

        expect(screen.getByText("00 : 01 : 00")).toBeInTheDocument()

        fireEvent.click(startStopButton)

        act(() => {
            jest.advanceTimersByTime(TIME_MILLISECONDS.ONE_SECOND)
        })

        expect(screen.getByText("00 : 01 : 00")).toBeInTheDocument()
    })

    it("resets the timer when the reset button is clicked", () => {
        render(<Stopwatch />)

        const startStopButton = screen.getByRole("button", { name: /go/i })
        const resetButton = screen.getByRole("button", { name: /reset/i })

        fireEvent.click(startStopButton)
        act(() => {
            jest.advanceTimersByTime(TIME_MILLISECONDS.ONE_SECOND)
        })

        expect(screen.getByText("00 : 01 : 00")).toBeInTheDocument()

        fireEvent.click(resetButton)

        expect(screen.getByText("00 : 00 : 00")).toBeInTheDocument()
    })

    it("should change the button text to 'stop' when the timer is running", () => {
        render(<Stopwatch />)

        const goButton = screen.getByRole("button", { name: /go/i })

        fireEvent.click(goButton)

        expect(
            screen.getByRole("button", { name: /stop/i })
        ).toBeInTheDocument()
        expect(
            screen.queryByRole("button", { name: /go/i })
        ).not.toBeInTheDocument()
    })
})
