import { render, screen } from "@testing-library/react"
import React from "react"
import { useWatch } from "react-hook-form"

import FormBreadcrumbs from "./Breadcrumbs"

import { useCreateFormContextInputs } from "../hooks/use-create-form-context"

jest.mock("../hooks/use-create-form-context", () => ({
    useCreateFormContextInputs: jest.fn(),
}))

jest.mock("react-hook-form", () => ({
    useWatch: jest.fn(),
}))

jest.mock("@/components/libs/mui", () => ({
    MuiBox: ({ children }: { children: React.ReactNode }) => (
        <div>{children}</div>
    ),
    MuiStep: ({ children }: { children: React.ReactNode }) => (
        <div>{children}</div>
    ),
    MuiStepLabel: ({ children }: { children: React.ReactNode }) => (
        <div>{children}</div>
    ),
    MuiStepper: ({
        children,
        activeStep,
    }: {
        children: React.ReactNode
        activeStep: number
    }) => (
        <div data-testid="stepper" data-active-step={activeStep}>
            {children}
        </div>
    ),
}))

describe("FormBreadcrumbs", () => {
    const mockControl = {}
    const mockUseCreateFormContextInputs = {
        control: mockControl,
    }

    beforeEach(() => {
        ;(useCreateFormContextInputs as jest.Mock).mockReturnValue(
            mockUseCreateFormContextInputs
        )
    })

    it("renders the steps correctly", () => {
        ;(useWatch as jest.Mock).mockReturnValue(0)

        render(<FormBreadcrumbs />)

        expect(screen.getByText("Select Exercise")).toBeInTheDocument()
        expect(screen.getByText("Select Level")).toBeInTheDocument()
        expect(screen.getByText("Log Workout")).toBeInTheDocument()
    })

    it("sets the active step correctly", () => {
        const activeStep = 1
        ;(useWatch as jest.Mock).mockReturnValue(activeStep)

        render(<FormBreadcrumbs />)

        const stepper = screen.getByTestId("stepper")
        expect(stepper).toHaveAttribute(
            "data-active-step",
            activeStep.toString()
        )
    })
})
