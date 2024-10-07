import { render, screen } from "@testing-library/react"
import React from "react"

import {
    type WorkoutData,
    workoutTypes,
} from "@/modules/model/workout/workout-schemas"

import LineChart from "./LineChart"

const ONE_WEEK = 604800000

const mockLineChartArguments: WorkoutData[] = [
    {
        id: "id1",
        key: "key1",
        date: new Date().getTime(),
        reps: [30, 23, 28],
        level: 5,
        type: workoutTypes.pushUp.id,
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        id: "id2",
        key: "key2",
        date: new Date().getTime() - ONE_WEEK,
        reps: [30, 27, 22],
        level: 5,
        type: workoutTypes.pushUp.id,
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        id: "id3",
        key: "key3",
        date: new Date().getTime() - ONE_WEEK * 2,
        reps: [25, 22, 18],
        level: 5,
        type: workoutTypes.pushUp.id,
        comments: "comments",
        user: "user@email.co.uk",
    },
    {
        id: "id4",
        key: "key4",
        date: new Date().getTime() - ONE_WEEK * 3,
        reps: [20, 18, 15],
        level: 5,
        type: workoutTypes.pushUp.id,
        comments: "comments",
        user: "user@email.co.uk",
    },
]

jest.mock("../../../../../../modules/components/library/mui/muix.ts", () => ({
    MuiLineChart: jest.fn(() => <div data-testid="mui-line-chart" />),
}))

describe("LineChart", () => {
    it("renders without crashing", () => {
        render(<LineChart data={mockLineChartArguments} />)
        expect(screen.getByTestId("mui-line-chart")).toBeInTheDocument()
    })
})
