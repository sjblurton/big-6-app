import { render, screen } from "@testing-library/react"
import React from "react"

import { MuiBarChart } from "@/components/libs/mui/muix"
import { secondaryLight } from "@/styles/colors/_exports.module.scss"

import BarChart from "./BarChart"

jest.mock("@/components/libs/mui/muix", () => ({
    MuiBarChart: jest.fn(() => <div data-testid="muibarchart" />),
}))

describe("BarChart", () => {
    const reps = [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }]

    it("renders without crashing", () => {
        render(<BarChart reps={reps} />)
        expect(screen.getByTestId("muibarchart")).toBeInTheDocument()
    })

    it("passes the correct props to MuiBarChart", () => {
        render(<BarChart reps={reps} />)
        expect(MuiBarChart).toHaveBeenCalledWith(
            expect.objectContaining({
                desc: "A bar chart showing the number of sets an reps completed for the day.",
                xAxis: [
                    {
                        scaleType: "band",
                        data: reps.map((_, index) => `Set: ${index + 1}`),
                    },
                ],
                series: [
                    {
                        data: reps.map(({ value }) => value),
                        color: secondaryLight,
                    },
                ],
            }),
            {}
        )
    })
})
