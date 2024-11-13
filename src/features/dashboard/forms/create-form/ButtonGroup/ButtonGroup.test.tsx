import { fireEvent, render, screen } from "@testing-library/react"
import { useRouter } from "next/navigation"
import React from "react"

import { type CreateWorkoutDataInput } from "@/@types/forms/forms-types"
import { type DeepPartial } from "@/utils/typescript/utility-types"

import ButtonGroup from "./ButtonGroup"
import useHandleButtons from "./hooks/use-handle-buttons"

import FormProviderWrapper from "../CreateFormProvider/CreateFormProvider"

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}))

// Mock the useHandleButtons hook
jest.mock("./hooks/use-handle-buttons")

describe("ButtonGroup", () => {
    const handleNext = jest.fn()
    const handleCancel = jest.fn()
    const handlePrevious = jest.fn()

    const mockRouter = {
        push: jest.fn(),
    }

    const mockHook = {
        handleNext,
        handleCancel,
        handlePrevious,
        isLoading: false,
    }

    beforeEach(() => {
        ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
        ;(useHandleButtons as jest.Mock).mockReturnValue(mockHook)
    })

    const renderComponent = (
        stepNumber: number,
        isLoading: boolean = false
    ) => {
        mockHook.isLoading = isLoading
        const defaultValues: DeepPartial<CreateWorkoutDataInput> = {
            metadata: {
                step: {
                    current: stepNumber,
                    total: 3,
                },
            },
        }
        render(
            <FormProviderWrapper defaultValues={defaultValues}>
                <ButtonGroup />
            </FormProviderWrapper>
        )
    }

    it("renders Next and Cancel buttons on first step", () => {
        renderComponent(0)

        expect(screen.getByText("Next")).toBeInTheDocument()
        expect(screen.getByText("cancel")).toBeInTheDocument()
    })

    it("renders Prev, Next, and Cancel button when it's not the first step", () => {
        renderComponent(1)

        expect(screen.getByText("Prev")).toBeInTheDocument()
        expect(screen.getByText("Next")).toBeInTheDocument()
        expect(screen.getByText("cancel")).toBeInTheDocument()
    })

    it("does not render Prev button when it's on the first step", () => {
        renderComponent(0)

        expect(screen.queryByText("Prev")).not.toBeInTheDocument()
    })

    it("calls handleNext when Next button is clicked", () => {
        renderComponent(0)

        fireEvent.click(screen.getByText("Next"))
        expect(handleNext).toHaveBeenCalled()
    })

    it("calls handleCancel when Cancel button is clicked", () => {
        renderComponent(0)

        fireEvent.click(screen.getByText("cancel"))
        expect(handleCancel).toHaveBeenCalled()
    })

    it("calls handlePrevious when Prev button is clicked", () => {
        renderComponent(1)

        fireEvent.click(screen.getByText("Prev"))
        expect(handlePrevious).toHaveBeenCalled()
    })

    it("renders and disables buttons buttons when isLoading is true", () => {
        renderComponent(1, true)

        expect(screen.getByText("Next")).toBeInTheDocument()
        expect(screen.getByText("Next")).toBeDisabled()
        expect(screen.getByText("cancel")).toBeInTheDocument()
        expect(screen.getByText("cancel")).toBeDisabled()
        expect(screen.getByText("Prev")).toBeInTheDocument()
        expect(screen.getByText("Prev")).toBeDisabled()
    })

    it("renders the Submit button when it's the last step", () => {
        renderComponent(2)

        expect(screen.getByText("Submit")).toBeInTheDocument()
    })

    it("does not render the Next button when it's the last step", () => {
        renderComponent(2)

        expect(screen.queryByText("Next")).not.toBeInTheDocument()
    })
})
