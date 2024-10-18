import { render, screen, waitFor } from "@testing-library/react"
import React from "react"

import useGetWorkoutIds from "@/modules/tanstackQuery/hooks/use-get-workout-ids"

import WorkoutRadio from "./WorkoutRadio"

import { useCreateFormContextInputs } from "../../hooks/use-create-form-context"

jest.mock("@/modules/tanstackQuery/hooks/use-get-workout-ids")

jest.mock("../../hooks/use-create-form-context")

jest.mock("./WorkoutRadioButton/WorkoutRadioButton", () => {
    const MockWorkoutRadioButton = () => (
        <div data-testid="workout-radio-button" />
    )
    MockWorkoutRadioButton.displayName = "MockWorkoutRadioButton"
    return MockWorkoutRadioButton
})
jest.mock("./WorkoutSkeletonRadios/WorkoutSkeletonRadios", () => {
    const MockWorkoutSkeletonRadios = () => (
        <div data-testid="workout-skeleton-radios" />
    )
    MockWorkoutSkeletonRadios.displayName = "MockWorkoutSkeletonRadios"
    return MockWorkoutSkeletonRadios
})
jest.mock("../StepError/StepError", () => {
    const MockStepError = ({ message }: { message: string }) => (
        <div data-testid="step-error">{message}</div>
    )
    MockStepError.displayName = "MockStepError"
    return MockStepError
})

describe("WorkoutRadio", () => {
    const mockUseGetWorkoutIds = useGetWorkoutIds as jest.Mock
    const mockUseCreateFormContextInputs =
        useCreateFormContextInputs as jest.Mock

    const mockFormContext = {
        formState: { errors: {} },
    }

    beforeEach(() => {
        mockUseCreateFormContextInputs.mockReturnValue(mockFormContext)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("should render WorkoutSkeletonRadios when data is loading", () => {
        mockUseGetWorkoutIds.mockReturnValue({
            isLoading: true,
        })

        render(<WorkoutRadio />)

        expect(
            screen.getByTestId("workout-skeleton-radios")
        ).toBeInTheDocument()
    })

    it("should render WorkoutRadioButton components when data is fetched successfully", async () => {
        const mockData = [
            { _id: "1", name: "Workout 1" },
            { _id: "2", name: "Workout 2" },
        ]
        mockUseGetWorkoutIds.mockReturnValue({
            data: mockData,
            isLoading: false,
        })

        render(<WorkoutRadio />)

        await waitFor(() => {
            expect(screen.getAllByTestId("workout-radio-button")).toHaveLength(
                mockData.length
            )
        })
    })

    it("should throw an error when data fetching fails", () => {
        const mockError = new Error("Failed to fetch")
        mockUseGetWorkoutIds.mockReturnValue({
            isLoading: false,
            error: mockError,
        })

        expect(() => render(<WorkoutRadio />)).toThrow(
            "Failed to fetch workout ids"
        )
    })

    it("should display a form error when there is a form error", async () => {
        mockFormContext.formState.errors = {
            workout: { type: "Error message" },
        }
        const mockData = [
            { _id: "1", name: "Workout 1" },
            { _id: "2", name: "Workout 2" },
        ]
        mockUseGetWorkoutIds.mockReturnValue({
            data: mockData,
            isLoading: false,
        })

        render(<WorkoutRadio />)

        await waitFor(() => {
            expect(screen.getByTestId("step-error")).toBeInTheDocument()
            expect(
                screen.getByText("Please select a workout")
            ).toBeInTheDocument()
        })
    })
})
