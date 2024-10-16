import { render, screen } from "@testing-library/react"
import React from "react"

import FormStepper from "./FormStepper"

import { useCreateFormContextInputs } from "../hooks/use-create-form-context"

jest.mock("../hooks/use-create-form-context", () => ({
    useCreateFormContextInputs: jest.fn(),
}))

describe("FormStepper", () => {
    it("should render the child component corresponding to the current step 'Step 1'", () => {
        ;(useCreateFormContextInputs as jest.Mock).mockReturnValue({
            currentStep: 1,
        })

        render(
            <FormStepper>
                <div data-testid="step-0">Step 0</div>
                <div data-testid="step-1">Step 1</div>
                <div data-testid="step-2">Step 2</div>
            </FormStepper>
        )

        expect(screen.queryByTestId("step-0")).not.toBeInTheDocument()
        expect(screen.getByTestId("step-1")).toBeInTheDocument()
        expect(screen.queryByTestId("step-2")).not.toBeInTheDocument()
    })

    it("should render the child component corresponding to the current step 'Step 2'", () => {
        ;(useCreateFormContextInputs as jest.Mock).mockReturnValue({
            currentStep: 2,
        })

        render(
            <FormStepper>
                <div data-testid="step-0">Step 0</div>
                <div data-testid="step-1">Step 1</div>
                <div data-testid="step-2">Step 2</div>
            </FormStepper>
        )

        expect(screen.queryByTestId("step-0")).not.toBeInTheDocument()
        expect(screen.queryByTestId("step-1")).not.toBeInTheDocument()
        expect(screen.getByTestId("step-2")).toBeInTheDocument()
    })

    it("should render nothing if currentStep is out of bounds", () => {
        ;(useCreateFormContextInputs as jest.Mock).mockReturnValue({
            currentStep: 3,
        })

        render(
            <FormStepper>
                <div data-testid="step-0">Step 0</div>
                <div data-testid="step-1">Step 1</div>
                <div data-testid="step-2">Step 2</div>
            </FormStepper>
        )

        expect(screen.queryByTestId("step-0")).not.toBeInTheDocument()
        expect(screen.queryByTestId("step-1")).not.toBeInTheDocument()
        expect(screen.queryByTestId("step-2")).not.toBeInTheDocument()
    })
})
