import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"

import { repsSchema } from "@/modules/model/workout/workout-schemas"

import RepsArray from "./RepsArray"

jest.mock("react-hook-form", () => ({
    useFormContext: jest.fn(),
    useFieldArray: jest.fn(),
}))

jest.mock("@/modules/model/workout/workout-schemas", () => ({
    repsSchema: {
        safeParse: jest.fn(),
    },
}))

describe("RepsArray", () => {
    const mockUseFormContext = useFormContext as jest.Mock
    const mockUseFieldArray = useFieldArray as jest.Mock
    const mockRepsSchema = repsSchema.safeParse as jest.Mock

    const mockFormContext = {
        control: {},
        setError: jest.fn(),
        formState: { errors: {} },
        clearErrors: jest.fn(),
    }

    const mockFieldArray: {
        fields: Array<{ id: string; value: number }>
        append: () => void
        remove: () => void
    } = {
        fields: [],
        append: jest.fn(),
        remove: jest.fn(),
    }

    beforeEach(() => {
        mockUseFormContext.mockReturnValue(mockFormContext)
        mockUseFieldArray.mockReturnValue(mockFieldArray)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("should render the RepsArray component correctly", () => {
        render(<RepsArray />)

        expect(screen.getByLabelText("Add a Set")).toBeInTheDocument()
        expect(screen.getByLabelText("add")).toBeInTheDocument()
    })

    it("should add a set when the add button is clicked", async () => {
        mockRepsSchema.mockReturnValue({ success: true, data: 10 })

        render(<RepsArray />)

        const input = screen.getByLabelText("Add a Set")
        fireEvent.change(input, { target: { value: "10" } })

        const addButton = screen.getByLabelText("add")
        fireEvent.click(addButton)

        await waitFor(() => {
            expect(mockFormContext.clearErrors).toHaveBeenCalledWith(
                "workout.reps"
            )
            expect(mockFieldArray.append).toHaveBeenCalledWith({ value: 10 })
        })
    })

    it("should remove a set when the remove button is clicked", () => {
        mockFieldArray.fields = [{ id: "1", value: 10 }]

        render(<RepsArray />)

        const removeButton = screen.getByLabelText("remove")
        fireEvent.click(removeButton)

        expect(mockFieldArray.remove).toHaveBeenCalledWith(0)
    })

    it("should handle validation errors correctly", async () => {
        mockRepsSchema.mockReturnValue({
            success: false,
            error: { issues: [{ message: "Invalid reps" }] },
        })

        render(<RepsArray />)

        const input = screen.getByLabelText("Add Another Set")
        fireEvent.change(input, { target: { value: "invalid" } })

        const addButton = screen.getByLabelText("add")
        fireEvent.click(addButton)

        await waitFor(() => {
            expect(mockFormContext.setError).toHaveBeenCalledWith(
                "workout.reps",
                {
                    type: "manual",
                    message: "Invalid reps",
                }
            )
        })
    })
})
