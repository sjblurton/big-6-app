import { render, screen } from "@testing-library/react"
import React from "react"

import LevelRadioButton from "./LevelRadioButton"

jest.mock("@/components/form-inputs/RadioButton/RadioButton", () => {
    const MockRadioButton = (properties: { [key: string]: unknown }) => (
        <div data-testid="radio-button" {...properties} />
    )
    MockRadioButton.displayName = "MockRadioButton"
    return MockRadioButton
})

describe("LevelRadioButton", () => {
    it("should render the LevelRadioButton component with the correct label and value", () => {
        const level = "1"

        render(<LevelRadioButton level={level} />)

        const radioButton = screen.getByTestId("radio-button")
        expect(radioButton).toBeInTheDocument()
        expect(radioButton).toHaveAttribute("value", level)
        expect(radioButton).toHaveAttribute("name", "workout.level")
    })
})
