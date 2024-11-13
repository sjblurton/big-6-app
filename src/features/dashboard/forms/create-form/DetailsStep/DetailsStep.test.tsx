import { render, screen } from "@testing-library/react"
import React from "react"

import DetailsStep from "./DetailsStep"

jest.mock("@/components/form-inputs/DatePicker/DatePicker.tsx", () => {
    const MockDatePicker = () => <div data-testid="date-picker" />
    MockDatePicker.displayName = "MockDatePicker"
    return MockDatePicker
})

jest.mock("@/components/form-inputs/RepsArray/RepsArray.tsx", () => {
    const MockRepsArray = () => <div data-testid="reps-array" />
    MockRepsArray.displayName = "MockRepsArray"
    return MockRepsArray
})

jest.mock("@/components/form-inputs/TextField/TextField.tsx", () => {
    const MockTextField = (properties: Record<string, unknown>) => (
        <div data-testid="text-field" {...properties} />
    )
    MockTextField.displayName = "MockTextField"
    return MockTextField
})

jest.mock("@/components/libs/mui", () => ({
    MuiGrid: (properties: Record<string, unknown>) => (
        <div data-testid="mui-grid" {...properties} />
    ),
}))

describe("DetailsStep", () => {
    it("should render the DetailsStep component correctly", () => {
        render(<DetailsStep />)

        expect(screen.getByTestId("date-picker")).toBeInTheDocument()

        expect(screen.getByTestId("reps-array")).toBeInTheDocument()

        const textField = screen.getByTestId("text-field")
        expect(textField).toBeInTheDocument()
        expect(textField).toHaveAttribute("name", "workout.comments")
        expect(textField).toHaveAttribute("label", "Comments")
    })

    it("should render the MuiGrid components correctly", () => {
        render(<DetailsStep />)

        const muiGrids = screen.getAllByTestId("mui-grid")
        expect(muiGrids).toHaveLength(4)
    })
})
