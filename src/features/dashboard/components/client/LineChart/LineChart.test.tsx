import { render, screen } from "@testing-library/react"
import React from "react"

import { type WorkoutData } from "@/@types/workouts/workout-types"
import { WORKOUT_DETAILS } from "@/constants"
import { TIME_MILLISECONDS } from "@/constants/numbers/dates"

import LineChart from "./LineChart"

const mockLineChartArguments: WorkoutData[] = [
    {
        id: "id1",
        date: Date.now(),
        reps: [{ value: 30 }, { value: 23 }, { value: 28 }],
        level: 5,
        type: WORKOUT_DETAILS.pushUp.id,
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        id: "id2",
        date: Date.now() - TIME_MILLISECONDS.ONE_WEEK,
        reps: [{ value: 30 }, { value: 27 }, { value: 22 }],
        level: 5,
        type: WORKOUT_DETAILS.pushUp.id,
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        id: "id3",
        date: Date.now() - TIME_MILLISECONDS.ONE_WEEK * 2,
        reps: [{ value: 25 }, { value: 22 }, { value: 18 }],
        level: 5,
        type: WORKOUT_DETAILS.pushUp.id,
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        id: "id4",
        date: Date.now() - TIME_MILLISECONDS.ONE_WEEK * 3,
        reps: [{ value: 20 }, { value: 18 }, { value: 15 }],
        level: 5,
        type: WORKOUT_DETAILS.pushUp.id,
        comments: "comments",
        user: "user@email.co.uk",
    },
]

jest.mock("@/components/libs/mui", () => ({
    MuiLineChart: jest.fn(() => <div data-testid="mui-line-chart" />),
}))

describe("LineChart", () => {
    it("renders without crashing", () => {
        render(<LineChart data={mockLineChartArguments} />)
        expect(screen.getByTestId("mui-line-chart")).toBeInTheDocument()
    })
})
