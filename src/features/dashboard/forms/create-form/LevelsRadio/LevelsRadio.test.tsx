import { render, screen } from "@testing-library/react"
import React from "react"

import LevelsRadio from "./LevelsRadio"

import { useCreateFormContextInputs } from "../hooks/use-create-form-context"

jest.mock("../hooks/use-create-form-context", () => ({
    useCreateFormContextInputs: jest.fn(),
}))

jest.mock("./LevelRadioButton/LevelRadioButton", () => {
    const MockRadioButton = (properties: { [key: string]: unknown }) => (
        <div data-testid="level-radio-button" {...properties} />
    )
    return MockRadioButton
})

jest.mock("../StepError/StepError", () => {
    const MockStepError = (properties: { [key: string]: unknown }) => (
        <div data-testid="step-error" {...properties} />
    )
    return MockStepError
})

describe("LevelsRadio", () => {
    it("should render the correct number of LevelRadioButton components", () => {
        ;(useCreateFormContextInputs as jest.Mock).mockReturnValue({
            formState: { errors: {} },
        })

        render(<LevelsRadio />)

        const levelRadioButtons = screen.getAllByTestId("level-radio-button")
        expect(levelRadioButtons).toHaveLength(10)
    })

    it("should display an error message when there is a form error", async () => {
        ;(useCreateFormContextInputs as jest.Mock).mockReturnValue({
            formState: { errors: { workout: { level: "Error" } } },
        })

        render(<LevelsRadio />)

        const stepError = screen.getByTestId("step-error")
        expect(stepError).toHaveAttribute("message", "Please select a level")
    })
})
