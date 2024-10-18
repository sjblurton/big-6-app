import { useMutation } from "@tanstack/react-query"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { useRouter } from "next/navigation"
import React from "react"

import Form from "./Form"
import { useCreateFormContextOutputs } from "./hooks/use-create-form-context"

jest.mock("@tanstack/react-query", () => ({
    useMutation: jest.fn(),
}))

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}))

jest.mock("./hooks/use-create-form-context", () => ({
    useCreateFormContextOutputs: jest.fn(),
}))

jest.mock("./Breadcrumbs/Breadcrumbs", () => {
    const MockBreadcrumbs = () => <div data-testid="breadcrumbs" />
    MockBreadcrumbs.displayName = "MockBreadcrumbs"
    return MockBreadcrumbs
})

jest.mock("./ButtonGroup/ButtonGroup", () => {
    const MockButtonGroup = () => <div data-testid="button-group" />
    MockButtonGroup.displayName = "MockButtonGroup"
    return MockButtonGroup
})

jest.mock("./FormStepper/FormStepper", () => {
    const MockFormStepper = ({ children }: { children: React.ReactNode }) => (
        <div data-testid="form-stepper">{children}</div>
    )
    MockFormStepper.displayName = "MockFormStepper"
    return MockFormStepper
})

jest.mock("./steps/DetailsStep/DetailsStep", () => {
    const MockDetailsStep = () => <div data-testid="details-step" />
    MockDetailsStep.displayName = "MockDetailsStep"
    return MockDetailsStep
})

jest.mock("./steps/LevelsRadio/LevelsRadio", () => {
    const MockLevelsRadio = () => <div data-testid="levels-radio" />
    MockLevelsRadio.displayName = "MockLevelsRadio"
    return MockLevelsRadio
})

jest.mock("./steps/WorkoutRadio/WorkoutRadio", () => {
    const MockWorkoutRadio = () => <div data-testid="workout-radio" />
    MockWorkoutRadio.displayName = "MockWorkoutRadio"
    return MockWorkoutRadio
})

describe("Form", () => {
    const mockUseMutation = useMutation as jest.Mock
    const mockUseRouter = useRouter as jest.Mock
    const mockUseCreateFormContextOutputs =
        useCreateFormContextOutputs as jest.Mock

    const mockFormContext = {
        handleSubmit: jest.fn(
            (callback: (data: unknown) => void) => (data: unknown) =>
                callback(data)
        ),
    }

    beforeEach(() => {
        mockUseRouter.mockReturnValue({
            push: jest.fn(),
        })
        mockUseCreateFormContextOutputs.mockReturnValue(mockFormContext)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("should render without crashing", () => {
        mockUseMutation.mockReturnValue({
            mutateAsync: jest.fn(),
            isError: false,
        })

        render(<Form />)

        expect(screen.getByTestId("breadcrumbs")).toBeInTheDocument()
        expect(screen.getByTestId("form-stepper")).toBeInTheDocument()
        expect(screen.getByTestId("button-group")).toBeInTheDocument()
        expect(screen.getByTestId("workout-radio")).toBeInTheDocument()
        expect(screen.getByTestId("levels-radio")).toBeInTheDocument()
        expect(screen.getByTestId("details-step")).toBeInTheDocument()
    })

    it("should submit the form successfully", async () => {
        const mockMutateAsync = jest.fn().mockResolvedValue({ id: "123" })
        mockUseMutation.mockReturnValue({
            mutateAsync: mockMutateAsync,
            isError: false,
        })

        render(<Form />)

        fireEvent.submit(screen.getByTestId("form"))

        await waitFor(() => {
            expect(mockMutateAsync).toHaveBeenCalled()
        })
    })

    it("should throw an error when mutation fails", async () => {
        const mockError = new Error("Mutation failed")
        mockUseMutation.mockReturnValue({
            mutateAsync: jest.fn().mockRejectedValue(mockError),
            isError: true,
            error: mockError,
        })

        expect(() => render(<Form />)).toThrow("Mutation failed")
    })
})
