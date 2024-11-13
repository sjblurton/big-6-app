import { zodResolver } from "@hookform/resolvers/zod"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

import { MuiButton } from "@/components/libs/mui"

import TextField from "./TextField"

type FormValues = {
    testField: string
}

const renderWithFormProvider = (ui: React.ReactElement) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => {
        const methods = useForm<FormValues>()
        return <FormProvider {...methods}>{children}</FormProvider>
    }
    return render(ui, { wrapper: Wrapper })
}

describe("TextField", () => {
    it("renders the text field with the correct label", () => {
        renderWithFormProvider(
            <TextField<FormValues> label="Test Label" name="testField" />
        )

        expect(screen.getByLabelText("Test Label")).toBeInTheDocument()
    })

    it("renders the text field with error message", () => {
        const Wrapper = ({ children }: { children: React.ReactNode }) => {
            const methods = useForm<FormValues>({
                resolver: zodResolver(
                    z.object({ testField: z.string().min(5, "Error message") })
                ),
            })
            methods.setError("testField", { message: "Error message" })
            return <FormProvider {...methods}>{children}</FormProvider>
        }

        render(
            <Wrapper>
                <TextField<FormValues> label="Test Label" name="testField" />
                <MuiButton type="submit">Submit</MuiButton>
            </Wrapper>
        )

        act(() => {
            fireEvent.click(screen.getByText("Submit"))
        })

        waitFor(() => {
            expect(screen.getByText("Error message")).toBeInTheDocument()
        })
    })

    it("renders the text field as a number input", () => {
        renderWithFormProvider(
            <TextField<FormValues>
                label="Test Label"
                name="testField"
                isNumber
            />
        )

        expect(screen.getByLabelText("Test Label")).toHaveAttribute(
            "type",
            "number"
        )
    })

    it("renders the text field as a select input with options", () => {
        const options = [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
        ]

        renderWithFormProvider(
            <TextField<FormValues>
                label="Test Label"
                name="testField"
                isSelect
                options={options}
            />
        )

        expect(screen.getByLabelText("Test Label")).toBeInTheDocument()

        act(() => {
            fireEvent.click(screen.getByTestId("ArrowDropDownIcon"))
        })

        waitFor(() => {
            expect(screen.getByText("Option 1")).toBeInTheDocument()
            expect(screen.getByText("Option 2")).toBeInTheDocument()
        })
    })

    it("throws an error if isSelect is true and options are not provided", () => {
        const consoleErrorSpy = jest
            .spyOn(console, "error")
            .mockImplementation(() => {})

        expect(() =>
            renderWithFormProvider(
                <TextField<FormValues>
                    label="Test Label"
                    name="testField"
                    isSelect
                />
            )
        ).toThrow("options are required when isSelect is true")

        consoleErrorSpy.mockRestore()
    })
})
