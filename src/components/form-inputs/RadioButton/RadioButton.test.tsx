import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"

import RadioButton from "./RadioButton"

type FormValues = {
    option: string
}

const renderWithFormProvider = (ui: React.ReactElement) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => {
        const methods = useForm<FormValues>()
        return <FormProvider {...methods}>{children}</FormProvider>
    }
    return render(ui, { wrapper: Wrapper })
}

describe("RadioButton", () => {
    it("renders the radio button with the correct label", () => {
        renderWithFormProvider(
            <RadioButton<FormValues, "option">
                name="option"
                label="Option 1"
                value="1"
            />
        )

        expect(screen.getByLabelText("Option 1")).toBeInTheDocument()
    })

    it("checks the radio button and displays the selected label", () => {
        renderWithFormProvider(
            <RadioButton<FormValues, "option">
                name="option"
                label="Option 1"
                selectedLabel="Selected Option 1"
                value="1"
            />
        )

        const radioButton = screen.getByLabelText(
            "Option 1"
        ) as HTMLInputElement
        fireEvent.click(radioButton)

        expect(radioButton.checked).toBe(true)
        expect(screen.getByLabelText("Selected Option 1")).toBeInTheDocument()
    })

    it("applies the correct classes based on the size prop", () => {
        const { rerender } = renderWithFormProvider(
            <RadioButton<FormValues, "option">
                name="option"
                label="Option 1"
                value="1"
                size="small"
            />
        )

        const wrapper = screen.getByLabelText("Option 1").closest("div")
        expect(wrapper).toHaveClass("small")

        rerender(
            <RadioButton<FormValues, "option">
                name="option"
                label="Option 1"
                value="1"
                size="large"
            />
        )

        expect(wrapper).toHaveClass("large")
    })
})
