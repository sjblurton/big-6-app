import React from "react"
import { render, screen } from "@testing-library/react"
import { type WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"
import LineChart from "./LineChart"

const ONE_WEEK = 604800000

const mockLineChartArgs: WorkoutData[] = [
    {
        key: "key1",
        date: new Date().getTime(),
        reps: [30, 23, 28],
        level: 5,
        workoutId: "push-ups",
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        key: "key2",
        date: new Date().getTime() - ONE_WEEK,
        reps: [30, 27, 22],
        level: 5,
        workoutId: "push-ups",
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        key: "key3",
        date: new Date().getTime() - ONE_WEEK * 2,
        reps: [25, 22, 18],
        level: 5,
        workoutId: "push-ups",
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        key: "key4",
        date: new Date().getTime() - ONE_WEEK * 3,
        reps: [20, 18, 15],
        level: 5,
        workoutId: "push-ups",
        comments: "comments",
        user: "user@email.co.uk",
    },
]

jest.mock("../../library/mui/muix", () => ({
    MuiLineChart: jest.fn(() => <div data-testid="mui-line-chart" />),
}))

describe("LineChart", () => {
    it("renders without crashing", () => {
        render(<LineChart data={mockLineChartArgs} />)
        expect(screen.getByTestId("mui-line-chart")).toBeInTheDocument()
    })
})
