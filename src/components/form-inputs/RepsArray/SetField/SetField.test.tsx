import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"

import SetField from "./SetField"

describe("SetField", () => {
    const mockOnRemove = jest.fn()

    const renderSetField = (index: number, value: number) => {
        render(<SetField index={index} value={value} onRemove={mockOnRemove} />)
    }

    it("should render the SetField component with the correct props", () => {
        renderSetField(0, 100)

        const textField = screen.getByLabelText("Set 1")
        expect(textField).toBeInTheDocument()
        expect(textField).toHaveValue("100")

        const removeButton = screen.getByLabelText("remove")
        expect(removeButton).toBeInTheDocument()
    })

    it("should call onRemove when the remove button is clicked", () => {
        renderSetField(0, 100)

        const removeButton = screen.getByLabelText("remove")
        fireEvent.click(removeButton)

        expect(mockOnRemove).toHaveBeenCalledTimes(1)
    })

    it("should render the correct label based on the index prop", () => {
        renderSetField(1, 200)

        const textField = screen.getByLabelText("Set 2")
        expect(textField).toBeInTheDocument()
        expect(textField).toHaveValue("200")
    })
})
